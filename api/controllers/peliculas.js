const PeliculasService = ('../services/peliculas');

module.exports = {
    getAllPeliculas: async(req, res, next) => {
        const peliculas = await PeliculasService.getAllPeliculas();
        res.status(200).json({peliculas});
    }
};