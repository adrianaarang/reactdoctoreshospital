import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import { useParams } from 'react-router-dom';
import DoctoresComponent from './DoctoresComponent';
import DoctorDetalles from './DoctorDetalles';
import CreateHospital  from './CreateHospital';
import HospitalesComponent  from './HospitalesComponent.jsx';
import EjemploServiceComponent from './EjemploServiceComponent.jsx';


 
export default class Router extends Component {
    render() {
 
        function DoctoresElement () {
            let {idHospital} = useParams();
            return <DoctoresComponent idHospital={idHospital} />
        }
        function DetallesElement() {
            let { idDoctor } = useParams();
             return <DoctorDetalles idDoctor={idDoctor} />;
}
 
        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/doctores/:idHospital' element={<DoctoresElement/>}/>
                    <Route path='/createhospital' element={<CreateHospital/>}/>
                    <Route path='/hospitalescomponent' element={<HospitalesComponent/>}/>
                    <Route path='/ejemplo' element={<EjemploServiceComponent/>}/>

                   
                </Routes>
            </BrowserRouter>
        )
    }
}