import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales'

export default class HospitalesComponent extends Component {
  service = new ServiceHospitales();

  state = {
    hospitales: [],
    status: false
  }

  loadHospitales = () => {

    //una promesa no es un métood, es un ob¡jeto
    this.service.getHospitales().then((result) => {
      this.setState({
        hospitales: result,
        status: true
      })
    })
  }

  componentDidMount = () => {
    this.loadHospitales();
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="card shadow mx-auto" style={{ maxWidth: "900px" }}>
          <div className="card-body">
            <h1 className="card-title text-center mb-4">Hospitales</h1>

            {!this.state.status ? (
              <p className="text-center">Cargando hospitales...</p>
            ) : (
              <table className="table table-warning table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Camas</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.hospitales.map((hospital) => (
                    <tr key={hospital.idHospital}>
                      <td>{hospital.idHospital}</td>
                      <td>{hospital.nombre}</td>
                      <td>{hospital.direccion}</td>
                      <td>{hospital.telefono}</td>
                      <td>{hospital.camas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    )
  }
}