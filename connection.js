const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });