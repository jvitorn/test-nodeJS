const mysql = require('mysql');
var fs = require('fs');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    port: 3307,
    database :"delivery"
  });
  con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM tb_users", function (err, result, fields) {
      if (err) throw err;
      //create a file named mynewfile1.txt:
      var json_obj = JSON.stringify(result);
      fs.writeFile('public/file.json',json_obj, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      return console.log(json_obj);
      //console.log(result);
    });
  });