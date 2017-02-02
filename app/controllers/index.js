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
    var q = req.query.q;
    console.log('req.query.p: ', req.query.p);
    var page = parseInt(req.query.p, 10) || 0;
    // TODO: 查看page的值，在搜索的时候是多少？
    var count = 2;
    var index = page * count;

    if (catId) {

        Category
            .find({_id: catId})
            .populate({
                path: 'movies',
                select: 'title poster'
            }).
            exec(function(err, categories) {
                if (err) {
                    console.log(err);
                }
                var category = categories[0] || {};
                var movies = category.movies || [];
                var results = movies.slice(index, index + count);

                res.render('results', {
                    title: 'imooc 结果列表页面',
                    keyword: category.name,
                    currentPage: (page + 1),
                    query: 'cat=' + catId,
                    totalPage: Math.ceil(movies.length / count),
                    movies: results
                });
            });
    } else {
        Movie
            .find({name: q})
            .exec(function(err, movies) {
                if (err) {
                    console.log(err);
                }

                var results = movies.slice(index, index + count);

                res.render('results', {
                    title: 'imooc 结果页面',
                    keyword: q,
                    currentPage: (page + 1),
                    query: 'q=' + q,
                    totalPage: Math.ceil(movies.length / count),
                    movies: results
                });
            });
    }
};
