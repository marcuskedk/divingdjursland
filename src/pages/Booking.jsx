import React, { useState, useEffect } from 'react'
import { getHome } from '../helpers/database.jsx';

const Booking = () => {

    const [ service, setService ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ fejl, setFejl ] = useState(false)

    useEffect( () => {
        
        setLoading(true);

        // setTimeout(() => {
            getHome().then( data => {
                if ( data ) {
                    console.log(data);
                    setService(data);
                    setFejl(false);
                } else {
                    setService();
                    setFejl(true);
                }
            } ).finally(
                setLoading(false)
            )
        // }, 3000);
        
    }, [] )
    return (
        <>
            { fejl && <span>Der opstod en fejl</span> }
        </>
    )
}

export default Booking
