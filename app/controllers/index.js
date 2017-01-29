var Movie = require('../models/movie');

// index page
exports.index = function(req, res) {
    console.log('User in session: ', req.session.user);

    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('index', {
            title: 'imooc 首页',
            movies: movies
        });
    });
};
