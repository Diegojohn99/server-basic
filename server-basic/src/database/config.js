const mongoose = require('mongoose');

function dbconnention(){
    const DB_URL = process.env.DB_URL
    mongoose.connect(DB_URL);
    console.log("DB: conexion a base de datos exitosa")
}
module.exports = dbconnention