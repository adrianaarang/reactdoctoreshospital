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
        this.setState({
            doctores: response.data
        });
    })
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
                <h1>Doctores Component {this.props.idHospital}</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
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