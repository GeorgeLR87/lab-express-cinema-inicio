/// ./controllers/movieController.js
const Movie      = require('./../models/movie')

exports.getAllMovies = async (req, res) => {
    
    const allMovies = await Movie.find({})

    console.log(allMovies)

    res.render('movies/list', {
        data: allMovies
    })
}

exports.getMovie = async (req, res) => {

	const singleMovieID = req.params.movieID

	const getTheMovie = await Movie.findById(singleMovieID)

	console.log(getTheMovie)

	res.render("movies/single", {
		data: getTheMovie
	})
}



