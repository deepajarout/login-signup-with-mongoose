var express= require('express');
var app = express();
var path = require('path');
var createError = require('http-errors');
var indexRouter = require('./router/index');
var studentRouter = require('./router/student');
var middleware = require('./middleware/middleware');
var hbs = require('hbs');
var mongoose = require('mongoose');
// var session = require('express-session');

mongoose.connect("mongodb://127.0.0.1:27017/userinformation",{useNewUrlParser: true},function(e){
  console.log('You are now connected to mongodb...');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', require('hbs').__express);
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//#######  Application-Level Middleware   #########
// app.use(middleware.print); 

app.use('/', indexRouter);

//#######   Router-Level Middleware   ############
// app.use('/student' ,middleware.print, studentRouter);
app.use('/student' , studentRouter);


//#######  In-Built Middleware   ############
app.use(function(req, res, next) {
    next(createError(404));
  });


app.listen(4500,function(){
    console.log("Server is running 4500");
})