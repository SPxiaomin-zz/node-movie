var Movie = require('../models/movie');
var Category = require('../models/category');

// index page
exports.index = function(req, res) {
    Category
        .find({})
        .populate({path: 'movies', options: {limit: 5}})
        .exec(function(err, categories) {
            if (err) {
                console.log(err);
            }

            res.render('index', {
                title: 'imooc 首页',
                categories: categories
            });
        });
};

// search page
exports.search = function(req, res) {
    var catId = req.query.cat;
    var page = req.query.p;
    var index = page * 2;

    Category
        .find({id: catId})
        .populate({
            path: 'movies',
            select: 'title poster',
        })
};
