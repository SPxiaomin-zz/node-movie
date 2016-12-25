var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));
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
});

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
            title: '奇妙世纪 08 梦的还原器',
            doctor: '程亮/林博',
            country: '大陆',
            language: '汉语',
            year: 2014,
            poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
            flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf',
            summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。'
        }
    });
});

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            language: '',
            year: '',
            summary: '',
            poster: '',
            flash: ''
        }
    });
});

// list
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'imooc 列表页',
        movies: [{
            _id: 1,
            title: '奇妙世纪 08 梦的还原器',
            doctor: '程亮/林博',
            country: '大陆',
            year: 2014,
        }]
    });
});

app.listen(port);

console.log('imooc started on port ' + port);
