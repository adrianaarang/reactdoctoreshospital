import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import DoctorDetalles from './DoctorDetalles';

export default class DoctoresComponent extends Component {
    url = Global.urlApiDoctores;

    state = {
        doctores: [],
        idDoctor: null
    }

    loadDoctoresHospital = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idHospital;
        axios.get(this.url + request).then(response => {
            this.setState({
                doctores: response.data,
                idDoctor: null
            });
        });
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
                            this.state.doctores.map((doctor, index) => {
                                return (
                                    <tr key={index}>
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