var express = require('express');
var path = require('path');
var logger = require('morgan');

var port = process.env.PORT || 3000;
var app = express();

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'bower_components')));

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'imooc 首页',
        movies: [{
			title:'奇妙世纪 08 梦的还原器',
			_id: 1,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 2,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 3,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 4,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 5,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		},{
			title:'奇妙世纪 08 梦的还原器',
			_id: 6,
			poster:'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF'
		}]
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
