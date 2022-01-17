const express = require( 'express' );
const router = express.Router();
const db = require( '../src/data/db.json' );
const Booking = require( '../model/booking.model' );

// GET
router.get( "/", async ( req, res) => {
    
    console.log( "GET Booking" );

    try {
        res.status( 200 ).json( { divingdjursland: db } )
    } catch ( error ) {
        res.status( 500 ).json( { besked: "Der er opstået en fejl!" } )
    }

} )

// POST
router.post( "/", async ( req, res) => {
    
    console.log( "POST Booking" );

    try {
        let newBooking = new Booking( req.body )
        await newBooking.save();
        res.status( 200 ).json( { booking: "Booking er oprettet", created: newBooking } )
    } catch ( error ) {
        res.status( 500 ).json( { besked: "Der er opstået en fejl!" } )
    }

} )

module.exports = router;