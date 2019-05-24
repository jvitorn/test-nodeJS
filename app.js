const express = require('express');
const app  = express();
//folder
//app.use(express.static('app'));
//index
app.get('/',function(req,res){
  res.send("root");
});
//server
app.listen(3000,function(){
  console.log('Listen in port 3000');
});
