const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config(); //lee el archiivo .env donde está las vaaibles de entorno

//Crear el servidor/aplicacion de express
const app = express();

// Base de datos
dbConnection();

//directorio publico
app.use( express.static('public') );

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );


// Rutas - Hacemos uso de un middleware express
// Cualquier ruta que se encuentre en ./routes/auth tendrá de antemano /api/auth
app.use( '/api/auth', require('./routes/auth') );


// se despliega en el puerto 4000 (el 4200 es el que usa angular)
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} )