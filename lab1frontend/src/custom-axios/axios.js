import axios from "axios";
//da komunicirame so nadvoreshni resursi (java spring app)

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        // 'Authorization': localStorage.getItem("JWT")
    }
})


//da se pristapuva instanca od nadvor
export default instance;