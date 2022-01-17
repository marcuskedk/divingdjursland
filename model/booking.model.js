const mongoose = require( 'mongoose' );

const bookingSchema = new mongoose.Schema( {

    title: {
        type: String,
        required: true
    },
    txt: {
        type: String,
        required: true
    }

} )

module.exports = mongoose.model( 'Booking', bookingSchema, 'booking' );