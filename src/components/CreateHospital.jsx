import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import ServiceHospitales from '../services/ServiceHospitales'

export default class CreateHospital extends Component {
    service = new ServiceHospitales();

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    state = {
        mensaje: "",
    status: true 
    }

    insertHospital = (event) => {
        event.preventDefault();
        let hospital = {
            idHospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value)
        }

        this.service.insertHospital(hospital)
            .then(() => {
                this.setState({
                    status: true
                })
            })

    }

    render() {
        return (
            <div className="container mt-4">
                {this.state.status && <Navigate to="/" />}

                <div className="card shadow mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Create Hospital</h1>

                        {this.state.mensaje && (
                            <div className="alert alert-danger">{this.state.mensaje}</div>
                        )}

                        <form>
                            <div className="mb-3">
                                <label className="form-label">ID Hospital:</label>
                                <input type="number" ref={this.cajaId} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre:</label>
                                <input type="text" ref={this.cajaNombre} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Dirección:</label>
                                <input type="text" ref={this.cajaDireccion} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono:</label>
                                <input type="tel" ref={this.cajaTelefono} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Camas:</label>
                                <input type="number" ref={this.cajaCamas} className="form-control" />
                            </div>
                            <button onClick={this.insertHospital} className="btn btn-warning w-100">
                                Crear
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}