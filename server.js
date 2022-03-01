const express = require( 'express' );
const mongoose = require( 'mongoose' );
require( 'dotenv' ).config();

const server = express();

server.use( express.json() );
server.use( express.urlencoded() );

server.use( express.static( 'public' ) );

mongoose.connect( process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )

.then( conn => console.log( "Der er hul igennem til DB - og følgende models: ", conn.models ))
.catch( error => console.log( "Der er fejl med at forbinde til databasen", error ) )

const db = mongoose.connection;

server.get( "/", async ( req, res ) => {
    res.status( 200 ).json({ besked: "Her er serveren - velkommen til!" })
})

// ROUTES

server.listen( process.env.PORT, () => console.log( "\{^_^}/ Serveren lytter nu til port: " + process.env.PORT ) )