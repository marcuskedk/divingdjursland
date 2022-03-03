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
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    seize: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }

} )

module.exports = mongoose.model( 'Booking', bookingSchema, 'booking' );