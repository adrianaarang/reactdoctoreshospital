import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class DoctorDetalles extends Component {
    url = Global.urlApiDoctores;

    state = {
        doctor: null
    }

    loadDoctor = () => {
        let request = "api/doctores/" + this.props.idDoctor;
        axios.get(this.url + request).then(response => {
            this.setState({
                doctor: response.data
            });
        });
    }

    componentDidMount = () => {
        this.loadDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idDoctor !== this.props.idDoctor) {
            this.loadDoctor();
        }
    }

    render() {
        if (this.state.doctor == null) {
            return <p>Cargando...</p>;
        }

        let doctor = this.state.doctor;
        return (
            <div className="card mt-3" style={{ maxWidth: "400px" }}>
                <div className="card-body">
                    <h2 className="card-title">{doctor.apellido}</h2>
                    <p><strong>Id:</strong> {doctor.idDoctor}</p>
                    <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
                    <p><strong>Salario:</strong> {doctor.salario}</p>
                    <p><strong>Hospital:</strong> {doctor.idHospital}</p>
                </div>
            </div>
        );
    }
}