const express = require( 'express' );
const router = express.Router();
const BookingCategory = require( '../model/bookingCategory.model' );

// GET
router.get( "/bookingcategory", async ( req, res) => {
    
    console.log( "GET Booking Kategori" );

    try {
        // res.status( 200 ).json( { divingdjursland: db } )
        const bookingcategory = await BookingCategory.find()
        res.json(bookingcategory)
    } catch ( error ) {
        res.status( 500 ).json( { besked: "Der er opstået en fejl!" } )
    }

} )

// POST
router.post( "/bookingcategory", async ( req, res) => {
    
    console.log( "POST Booking Kategori" );

    try {
        let newBookingCategory = new Booking( req.body )
        await newBookingCategory.save();
        res.status( 200 ).json( { booking: "Booking er oprettet", created: newBookingCategory } )
    } catch ( error ) {
        res.status( 500 ).json( { besked: "Der er opstået en fejl!" } )
    }

} )

module.exports = router;