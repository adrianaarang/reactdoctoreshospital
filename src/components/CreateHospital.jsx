import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion  =React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    url = Global.urlApiHospitales; 

    //Si tengo algo de insertar tiene que ser un event 

insertHospital = (event) => {
    event.preventDefault();
    let request = "api/hospitales";
    let hospital = {
        idHospital : this.cajaId.current.value,
        nombre: this.cajaNombre.current.value,
        direccion: this.cajaDireccion.current.value,
        telefono: this.cajaTelefono.current.value,
        camas: this.cajaCamas.current.value
    }

//UNA VEZ LO TENEMOS NECESITAMOS SOLO LA CREACIÓN 
    axios.post(this.url + request, hospital ).then((response) => {
        console.log("Insertado!!!")
        this.setState({
            mensaje : "Hospital insertado: " + hospital.nombre
        })
    })



}
//EN STATE MENSAJE PARA CUANDO HAGA LA INSERCIÓN
state = {
    mensaje :""
}

render() {
  return (
    <div className="container mt-4">
      <div className="card shadow mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Create Hospital</h1>

          {this.state.mensaje && (
            <div className="alert alert-success">{this.state.mensaje}</div>
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
