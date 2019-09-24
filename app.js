//consts
const http  = require('http');
const express = require('express');
const app  = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    database :"Delivery"
  });
  //conection from database
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
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
//Get informations from delivery.json 
app.get('/delivery',function(res){
  //call filesistem for write json
  const fs = require('fs');
  //save in var
  const jsonDelivery = fs.readFileSync('./delivery.json','utf-8');
  //return
  res.send(jsonDelivery);
});
//Get informations from login
app.post('/test',function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  res.send('Your Name is ' + name + ' Your Email is ' + email + ' Your Password ' + password);
  //insert to database informations from login
    var sql = 'INSERT INTO tb_users (nm_user,ds_password,nm_email,nm_address,nm_city,nr_number,ds_picture) VALUES ("'+name+'","'+password+'","'+email+'",null," ",null,null)';
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
  console.log(req.body);
  res.end();
});

//server
app.listen(port,function(){
  console.log('Server is running at http://localhost:'+ port);
});
