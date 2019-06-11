//consts
const http  = require('http');
const express = require('express');
const app  = express();
const port = 3000;
const path = require('path');

//add folders
  app.use('/routes',express.static(__dirname + '/routes'));
  app.use('/stylesheets',express.static(__dirname + '/public/stylesheets'));
  app.use('/images',express.static(__dirname + '/public/images'));
  app.use('/sigup',express.static(__dirname + '/routes/form.html'));
  app.use('/painel',express.static(__dirname + '/public/painel.html'));
  app.use('/login',express.static(__dirname + '/routes/login.html'));
  app.use('/test',express.static(__dirname + '/public/test.html'));
  app.use(express.static(__dirname + '/public'));
  app.use('/views',express.static(__dirname + '/views'));
  //folders statics absoluties 
  app.use(express.static(path.join(__dirname,"public")));
//encode
app.use(express.urlencoded());
//index.
app.post('/return',function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  res.send('Your Name is ' + name + ' Your Email is ' + email + ' Your Password ' + password);
  res.end();
  if (name == joao){
    window.location('/routes/painel');
  }
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
//
//server
app.listen(port,function(){
  console.log('Server is running at localhost:'+ port);
});
