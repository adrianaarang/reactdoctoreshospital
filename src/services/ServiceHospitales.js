import axios from 'axios'
import Global from '../Global'

export default class ServiceHospitales {
    getHospitales() {
        return new Promise(function (resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.get(url + request).then((response ) => {
                console.log("Leyendo hospitales");
                resolve(response.data);
            })
        })
    }
    getDoctoresHospital(idHospital){
        return new Promise (function(resolve){
            let url = Global.urlApiDoctores;
            let request = "api/doctores/doctoreshospital/" + idHospital;
            axios.get(url + request).then((response ) => {
                console.log("Leyendo Doctores");
                resolve(response.data);
            })
        })
        
    }
    insertHospital(hospital) {
    return new Promise(function (resolve, reject) {
        let url = Global.urlApiHospitales;
        let request = "api/hospitales";
        axios.post(url + request, hospital)
            .then((response) => {
                console.log("Insertado!!!");
                resolve(response);
            })
    })
}
}