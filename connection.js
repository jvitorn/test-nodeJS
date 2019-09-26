const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    database :"delivery"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });