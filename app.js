//consts
const http  = require('http');
const express = require('express');
const app  = express();
const port = 3000;
const users = [
  {name:'joao',email:'joao@joao.com'},
  {name:'jeff',email:'jeff@com.br'}
]
//add folders
  app.use('/routes',express.static(__dirname + '/routes'));
  app.use('/views',express.static(__dirname + '/views'));
//encode
app.use(express.urlencoded());
//index.
app.post('/form',function(req,res){
  var email = req.body.email;
  console.log(email);
  res.end();
});
//
//server
app.listen(port,function(){
  console.log('Server is running at localhost:'+ port);
});
