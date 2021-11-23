// ./models/movie.js

// Importaciones 
const mongoose = require('mongoose')

//2 Schema
//Requisitos para crear una pelicula
const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
},
{
    timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})

// 3 Modelo
const Movie = mongoose.model('Movie', movieSchema)

// 4 Exportación
module.exports = Movie

