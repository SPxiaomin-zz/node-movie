var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var multipart = require('connect-multiparty');

var app = express();

var port = process.env.PORT || 3000;
var dbUrl = 'mongodb://localhost/imooc';
mongoose.connect(dbUrl);

app.set('views', path.join(__dirname, './app/views/pages'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
    app.locals.pretty = true;
    app.use(logger('dev'));
    app.set('showStackError', true);
    mongoose.set('debug', true);
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'imooc',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: dbUrl
    })
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(multipart());
app.locals.moment = require('moment');

require('./config/routes')(app);

app.listen(port);

console.log('imooc started on port ' + port);
