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
            console.log("Find doctor");
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
            <div>
                <h1>Detalles Doctor</h1>
                {
                    this.state.doctor &&
                    ( <ul className='list-group'>
                        <li className='list-list-group-item'>
                            Apellido: {this.state.doctor.apellido}
                        </li>
                         <li className='list-list-group-item'>
                            Especialidad: {this.state.doctor.especialidad}
                        </li>
                         <li className='list-list-group-item'>
                            Salario: {this.state.doctor.salario}
                        </li>
                         <li className='list-list-group-item'>
                            Hospital: {this.state.doctor.idHospital}
                        </li>
                       
                    </ul>

                    )

                }
          
            </div>
        );
    }
}