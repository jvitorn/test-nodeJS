//consts
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
//index

//
//server
app.listen(port,function(){
  console.log('Server is running at localhost:'+ port);
});
