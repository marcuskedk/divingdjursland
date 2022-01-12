import axios from "axios";

const api = {
    baseUrl: 'http://localhost:5023/divingdjursland'
}

export const getHome = () => {
    let endpoint = "aboutus/";
    let response = axios.get( api.baseUrl + endpoint)
    .then(
        // res => console.log( res )
        res => { return res.data }
    )
    .catch( fejl => {
        console.log( "Fejl", fejl)
        return null;    
    } )
    return response;
}