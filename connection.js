const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    database :"Delivery"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });