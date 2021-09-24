var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ventas'
});

connection.connect(
    (err)=>{
        if(!err){console.log("Conexión establecida");}
        else{console.log("Conexión fallida");}
    }
);

connection.query("SELECT * FROM tablaproductos",function(err,resultados){
    console.log(resultados);
});

connection.end();