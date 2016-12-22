const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'imooc 首页'
    });
})

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'imooc 详情页'
    });
})

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页'
    });
})

// list
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'imooc 列表页'
    });
})

app.listen(port);

console.log('imooc started on port ' + port);
