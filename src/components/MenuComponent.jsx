import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'; // Recomendado usar Link en vez de <a> para el router interno
import Global from '../Global';
import axios from 'axios';
export default class MenuComponent extends Component {
 
    urlHospitales = Global.urlApiHospitales;
 
    state = {
        hospitales: []
    }
 
    loadHospitales = () => {
        let request = "api/hospitales";
        console.log(this.urlHospitales + request);
        axios.get(this.urlHospitales + request).then(response => {
            this.setState({
                hospitales: response.data
            });
        })
    }
 
    componentDidMount = () => {
        this.loadHospitales();
    }
   
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid"> {/* En BS5 se suele envolver en un container */}
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* mr-auto cambió a me-auto en BS5 */}
                            <li className="nav-item">
                                  <NavLink className="nav-link" to="/" end>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctores/22">Doctores</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hospitales
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> {/* En BS5 el dropdown-menu suele ser un <ul> */}
                                    {
                                        this.state.hospitales.map((hospital, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="dropdown-item" to={"/doctores/" + hospital.idHospital}>{hospital.nombre}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}