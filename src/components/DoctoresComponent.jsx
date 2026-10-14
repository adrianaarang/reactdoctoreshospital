import React, { Component } from 'react';
import DoctorDetalles from './DoctorDetalles';
import ServiceHospitales from '../services/ServiceHospitales';

export default class DoctoresComponent extends Component {
    service = new ServiceHospitales();

    state = {
        doctores: [],
        idDoctor: null
    }

    loadDoctoresHospital = () => {
        this.service.getDoctoresHospital(this.props.idHospital).then(result => {
            this.setState({
                doctores: result
            })
        })
    }

    mostrarDetalles = (idDoctor) => {
        this.setState({
            idDoctor: idDoctor
        });
    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idHospital !== this.props.idHospital) {
            this.loadDoctoresHospital();
            this.setState({
                idDoctor: null
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Doctores del hospital {this.props.idHospital}</h1>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doctor) => {
                                return (
                                    <tr key={doctor.idDoctor}>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td>{doctor.idHospital}</td>
                                        <td>
                                            <button className="btn btn-info btn-sm"
                                                onClick={() => this.mostrarDetalles(doctor.idDoctor)}>
                                                Detalles
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {
                    this.state.idDoctor != null &&
                    <DoctorDetalles idDoctor={this.state.idDoctor} />
                }
            </div>
        )
    }
}