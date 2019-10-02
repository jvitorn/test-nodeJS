module.exports ={
    execute : function(con,sql,res){
        con.query(sql, function (error, results) {
            //error
            if (error){
                res.send(error);
            }
            else{ 
                res.send(results);
                console.log(results.length);
                
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
                        con.end();
                    }
                    // error in where
                    else{
                        console.log('nenhum registro');
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
                        con.end();
                    }
                    else{
                        res.send('algo de errado nao parece certo');
                    }
                }
        });
    }
}