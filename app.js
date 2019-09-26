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
var sql ='';
var redirect='';
//functions to database 
function Register (con,sql,email,password,name){  
  con.query(sql, function (err, result) {
        //error
        if (err) throw err;
        //result
        if(result.affectedRows == 1){
          console.log("1 record inserted");
        }
    });
  };
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
app.post('/register_user',function(req,res){
  //catch informations from register
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  //insert to database informations from login
  sql += 'INSERT INTO tb_users (nm_user,ds_password,nm_email,nm_address,nm_city,nr_number,ds_picture) VALUES ("'+name+'","'+password+'","'+email+'",null," ",null,null)';
  //insert rote to redirect page
  redirect+='/login';
  //function from insert informations from database
  Register(con,sql,email,password,name);
  res.send('successfully registered user');
  //redirect page 
  res.redirect(redirect);
  res.end();
});

//server
app.listen(port,function(){
  console.log('Server is running at http://localhost:'+ port);
});
