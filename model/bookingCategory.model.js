const mongoose = require( 'mongoose' );

const bookingcategorySchema = new mongoose.Schema( {

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    max_amount: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    depth: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

} )

module.exports = mongoose.model( 'BookingCategory', bookingcategorySchema, 'bookingcategory' );