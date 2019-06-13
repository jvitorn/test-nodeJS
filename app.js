//consts
const http  = require('http');
const express = require('express');
const app  = express();
const port = 3000;
const path = require('path');

//add folders
  app.use('/routes',express.static(__dirname + '/routes'));
  app.use('/stylesheets',express.static(__dirname + '/public/stylesheets'));
  app.use('/register',express.static(__dirname + '/public/register.html'));
  app.use('/painel',express.static(__dirname + '/public/painel.html'));
  app.use('/login',express.static(__dirname + '/public/login.html'));
  app.use('/test',express.static(__dirname + '/public/test.html'));
  app.use('/views',express.static(__dirname + '/views'));
  //folders statics absoluties 
  app.use('/',express.static(path.join(__dirname,"public")));
//encode
app.use(express.urlencoded());

//Get informations from Register
app.post('/sigup',function(req,res){
 
});
//Get informations from delivery.json 
app.get('/delivery',function(req,res){
  //call filesistem for write json
  const fs = require('fs');
  //save in var
  const jsonDelivery = fs.readFileSync('./delivery.json','utf-8');
  //return
  return res.send(jsonDelivery);
});
//Get informations from login
app.post('/reguests',function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  res.send('Your Name is ' + name + ' Your Email is ' + email + ' Your Password ' + password);
});

//server
app.listen(port,function(){
  console.log('Server is running at localhost:'+ port);
});
