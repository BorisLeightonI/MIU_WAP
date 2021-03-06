'use strict'

/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// custom log format
if (process.env.NODE_ENV !== 'test') app.use(logger(':method :url'))

// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.
app.use(cookieParser('salt for cooking'))


// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// this is for req.body

app.use(express.static('views'))
app.set('view engine', 'ejs')


app.get('/', function(req, res){
  res.render('form', {req})
});

app.post('/', (req, res)=>{
  console.log('post: req.body ',req.body);
  res.cookie(req.body.key, req.body.value);
  res.redirect('/');
});

app.get('/forget', function(req, res){
  res.clearCookie('remember');
  res.redirect('back');
});

// app.post('/', function(req, res){
//   var minute = 60000;
//   if (req.body.remember) res.cookie('remember', 1, { maxAge: minute });
//   res.redirect('back');
// });

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}