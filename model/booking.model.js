const mongoose = require( 'mongoose' );

const bookingSchema = new mongoose.Schema( {

    category_id: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    seize: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }

} )

module.exports = mongoose.model( 'Booking', bookingSchema, 'booking' );