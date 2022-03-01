import axios from "axios";

const api = {
    baseUrl: 'http://localhost:3000/'
}

export const getBookingCategory = () => {
    let endpoint = "bookingcategory/";
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

export const getBooking = () => {
    let endpoint = "booking/";
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