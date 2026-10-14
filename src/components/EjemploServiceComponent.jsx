import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo';

export default class EjemploServiceComponent extends Component {
    // Necesitamos un objeto de la clase Service
    service = new ServiceEjemplo();

    state = {
        mensaje1: "",
        mensaje2: "", 
        comics: []
    }

    loadData = () => {
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2: this.service.getDia("Alumno"), 
            comics: this.service.getComics()
        })
    }

    componentDidMount = () => {
        this.loadData();
    }

 render() {
    return (
        <div>
            <h1>Ejemplo Service</h1>
            <h3 style={{ color: "blue" }}>{this.state.mensaje1}</h3>
            <h3 style={{ color: "green" }}>{this.state.mensaje2}</h3>
            <h3 style={{ color: "red" }}>Comics: {this.state.comics.length}</h3>
            {
                this.state.comics.map((comic, index) => {
                    return (
                        <div key={index}>
                            <h2>{comic.titulo}</h2>
                            <img src={comic.imagen} alt={comic.titulo}
                                style={{ width: "120px", height: "150px" }} />
                            <p>{comic.descripcion}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
}