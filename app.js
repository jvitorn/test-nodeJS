//consts
const http  = require('http');
const express = require('express');
const app  = express();
const port = 3000;
const path = require('path');
const mysql = require('mysql');
const fs = require('fs');
//require
const database = require('./database.js');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    port: 3307,
    database :"Delivery"
  });
var sql ='';
var redirect='';
//functions to database 

  //conection from database
  con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
//add folders
  app.use('/stylesheets',express.static(__dirname + '/public/stylesheets'));
  app.use('/register',express.static(__dirname + '/public/register.html'));
  app.use('/painel',express.static(__dirname + '/public/painel.html'));
  app.use('/login',express.static(__dirname + '/public/login.html'));
  app.use('/test',express.static(__dirname + '/public/test.html'));
  app.use('/views',express.static(__dirname + '/views'));
  //folders statics absoluties 
  app.use('/',express.static(path.join(__dirname,"/public")));
//encode
app.use(express.urlencoded());
//Get informations from delivery.json 
app.get('/delivery',function(res){
  //call filesistem for write json
  const fs = require('fs');
  //save in var
  const jsonDelivery = fs.readFileSync('./delivery.json','utf-8');
  //return
  res.send(jsonDelivery);
});
//Get informations from Register
app.post('/register_user',function(req,res){
  //catch informations from register
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  //insert to database informations from login
  sql = 'INSERT INTO tb_users (nm_user,ds_password,nm_email,nm_address,nm_city,nr_number,ds_picture) VALUES ("'+name+'","'+password+'","'+email+'",null," ",null,null);';
  //function from insert informations from database
  database.register(con,sql,res);
  console.log(req.body);
  console.log(sql);
});
//Get informations From Register
app.post('/sigin',function(req,res){
  //catch informations from Login
  var email = req.body.email;
  var password = req.body.password;
  //insert to database informations from login
  sql = 'SELECT * FROM tb_users WHERE nm_email = "'+email+'" AND ds_password ="'+password+'";';
  //function from insert informations from database
  database.login(con,sql,res);
  console.log(req.body);
});
app.get('/teste',function(req,res){
  //insert to database informations from login
  sql = 'SELECT * FROM tb_users;';
  //function from insert informations from database
  database.execute(con,sql,res);
});

//server
app.listen(port,function(){
  console.log('Server is running at http://localhost:'+ port);
});
