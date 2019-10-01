module.exports ={
    execute : function(con,sql,res){
        con.query(sql, function (error, results) {
            //error
            if (error){
                res.send(error);
            }
            else{ 
                res.send(results);
                con.end();
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
                    // error in insert
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
                    // new row
                    res.send(results);
                    con.end();
                }
        });
    }
}