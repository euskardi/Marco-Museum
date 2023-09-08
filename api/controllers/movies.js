const MoviesService = require('../services/movies');

module.exports = {
    
    getAllMovies: async(req, res, next) => {       
        const movies = await MoviesService.getAllMovies();
        res.status(200).json({movies});
    }

};
