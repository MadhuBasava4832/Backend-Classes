var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//added imports from here
const cors = require("cors");
const bodyparser = require("body-parser");
const firstRoutes = require("./Routes/firstRotes");
const mongoose = require("mongoose");





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//added code here
app.use(cors());
app.use(bodyparser.json());
app.use("/",firstRoutes);

mongoose.connect("mongodb+srv://madhubasava32:sFdTiFnt5iX1gNrq@cluster0.htcus.mongodb.net/")
.then( result => {
  console.log("connected successfully mongodb");
  
})
.catch( error => {
  console.log("error occured" + error );
  
})






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





//Added code here start

// app.get("/testing1",function(req,res){
//   res.send("<h1>hai hello</h1>")
// })



var port = 9000;
app.listen(port,function()
{
  console.log("server started at port  " + port );
  
})



//Added code here end



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
