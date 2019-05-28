//consts
const http  = require('http');
const express = require('express');
const app  = express();
const port = 3000;

//add folders
  app.use('/routes',express.static(__dirname + '/routes'));
  app.use('/routes/stylesheets',express.static(__dirname + '/routes/stylesheets'));
  app.use('/routes/images',express.static(__dirname + '/routes/images'));
  app.use(express.static(__dirname + '/public'));
  app.use('/views',express.static(__dirname + '/views'));

//encode
app.use(express.urlencoded());
//index.
app.post('/form',function(req,res){
  var email = req.body.email;
  console.log(email);
  res.end();
});

//
//server
app.listen(port,function(){
  console.log('Server is running at localhost:'+ port);
});
