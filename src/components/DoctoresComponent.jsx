import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class DoctoresComponent extends Component {
    url = Global.urlApiDoctores;

    state = {
        doctores: []
    }

    loadDoctoresHospital = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idHospital;
        console.log(this.url + request);
        axios.get(this.url + request).then(response => {
            console.log("Leyendo doctores");
            this.setState({
                doctores: response.data
            });
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
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
