// routers .movies.js
//1 Importaciones

const express          = require('express')
const router           = express.Router()


const movieController  = require('./../controllers/movieController') 

//2 Ruteo con base URL

// Lectura de los libros creados
router.get('/', movieController.getAllMovies)

// LECTURA DE UN LIBRO ESPECÍFICO
router.get("/:movieID", movieController.getMovie)



//3 Exportacion
module.exports = router