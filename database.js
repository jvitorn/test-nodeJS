module.exports ={
    execute : function(con,sql,res){
        con.query(sql, function (error, results) {
            //error
            if (error){
                res.send(error);
            }
            else{ 
                res.send(results);
            }
        });
    },
    register : function(con,sql,res){  
        con.query(sql, function (error, results) {
              //error
              if (error){
                res.send(error);
              }
              //sucess
              else{
                    // new row
                    if(results.affectedRows == 1 ){
                        res.send('<script>alert("successfully registered user!");window.location.href = "/login";</script>');
                    }
                    // error in where
                    else{
                        console.log('no record');
                    }
                }
        });
    },
    login : function(con,sql,res){  
        con.query(sql, function (error, results) {
              //error
              if (error){
                res.send(error);
              }
              //sucess
              else{
                    // result user from database
                    if(results.length == 1){
                        res.send('<script>alert("successfully registered user!");window.location.href = "/painel";</script>');
                    }
                    else{
                        res.send('something wrong doesn´t seem right');
                    }
                }
        });
    }
}