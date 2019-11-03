//consts
const express = require('express');
const app  = express();
const port = 3000;
const path = require('path');
const mysql = require('mysql');
const server = require('http').createServer(app); 


//require database
const database = require('./database.js');
// database conection 
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    port: 3306,
    database :"Delivery"
  });
var sql ='';
var email = '';
var password = '';
var chosenRestaurant = ' ';
//functions to database 

  //conection from database
  con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });

//folders statics absoluties 
app.use(express.static(path.join(__dirname,'public')));
// views
app.set('views',path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
//encode
app.use(express.urlencoded());

//add folders
app.use('/stylesheets',express.static(__dirname + '/public/stylesheets'));
app.use('/restaurants',express.static(__dirname + '/public/restaurants.html'));
app.use('/register',express.static(__dirname + '/public/register.html'));
app.use('/painel',express.static(__dirname + '/public/painel.html'));
app.use('/login',express.static(__dirname + '/public/login.html'));
app.use('/test',express.static(__dirname + '/public/test.html'));
//use requests from adm 
  app.use('/adm',(req,res)=>{
      res.render('adm/index.html');
  });
  app.get('/countUsers',(req,res)=>{
      sql = "SELECT COUNT('cd_users') as countUsers FROM tb_users;";
      database.execute(con,sql,res);
  });
  app.get('/countRestaurants',(req,res)=>{
      sql = "SELECT COUNT('cd_restaurants') as countRestaurants FROM tb_restaurants;";
      database.execute(con,sql,res);
  });
  app.get('/countDelivery',(req,res)=>{
    sql = "SELECT COUNT('cd_delivery') as countDelivery FROM tb_delivery;";
    database.execute(con,sql,res);
  });
  app.post('/fastRegistrationRestaurant',(req,res)=>{
    let nameRestaurant = req.body.name;
    let cnpjRestaurant = req.body.cnpj;
    let typeRestaurant = req.body.type;
    sql = 'INSERT INTO tb_restaurants(nm_restaurant, nr_cnpj, nm_type,ds_level) VALUES ("'+nameRestaurant+'","'+cnpjRestaurant+'","'+typeRestaurant+'",1);';
    console.log(req.body);
    console.log(sql);
    database.fastRegistrationRestaurant(con,sql,res);
  });
//Get informations from delivery.json 
app.get('/delivery',(res) => {
  res.send(email);
});
//Get informations from Register
app.post('/register_user',(req,res) => {
  //catch informations from register
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;
  //insert to database informations from login
  sql = 'INSERT INTO tb_users (nm_user,ds_password,nm_email,nm_address,nm_city,nr_number,ds_picture,ds_level) VALUES ("'+name+'","'+password+'","'+email+'",null," ",null,null,1);';
  //function from insert informations from database
  database.register(con,sql,res);
});
//Get informations From Register
app.post('/sigin',(req,res) => {
  //catch informations from Login
  email = req.body.email;
  password = req.body.password;
  //insert to database informations from login
  sql = 'SELECT * FROM tb_users WHERE nm_email = "'+email+'" AND ds_password ="'+password+'";';

  //function from insert informations from database
  database.login(con,sql,res);
  console.log(req.body);
  return email,password;
});
//Get informations From aaaaa
app.get('/user_info',(req,res) => {
  sql = 'SELECT * FROM tb_users WHERE nm_email = "'+email+'" AND ds_password ="'+password+'";';
  //insert to database informations from login
  //function from insert informations from database
  database.execute(con,sql,res);
});
// Views last three records in restaurants
app.get('/RecentlyOpened',(req,res)=>{
  sql = "SELECT cd_restaurant AS 'CODE' , nm_restaurant AS 'RESTAURANT', nm_location AS 'LOCATION', nm_type AS 'TYPE' from tb_restaurants WHERE ds_level = 1 ORDER BY cd_restaurant DESC LIMIT 4"; 
  database.execute(con,sql,res);
});
app.post('/ChosenRestaurant',(res)=>{
  chosenRestaurant = res.body.restaurant;
  console.log(chosenRestaurant);
  return chosenRestaurant;
});
app.get('/restaurant_info', function(req, res) {
  sql = 'SELECT * FROM tb_restaurants WHERE ds_level = 1 and cd_restaurant ='+chosenRestaurant;
  database.execute(con,sql,res);
});

//s
//server
app.listen(port,function(){
  console.log('Server is running at http://localhost:'+ port);
});
