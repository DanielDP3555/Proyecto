const port =process.env.port || 4000;

const db_host =process.env.db_host || 'localhost';
const db_user =process.env.db_user || 'root';
const db_password =process.env.db_password || '123';
const db_name =process.env.db_name || 'productos';
const de_port =process.env.port || 3306;
const path =require('path')


const express = require('express');
var mysql = require('mysql');
const app = express();
const ejs = require('ejs');
const { error } = require('console');

var connection = mysql.createConnection({
    host     : db_host,
    user     : db_user,
    password : db_password,
    database : db_name,
    port: de_port,
  })

//settings

//conexion
connection.connect((error)=>{
  if(error){
    console.log("Error");
    throw error;
  }else{
    console.log("Pos no")
  }
});

//middlewares
    app.set('view engine', 'ejs')
    app.use(express.static(path.join(__dirname,)))
 
//rutas
    app.get('/', (req, res)=>{
        var query = connection.query('SELECT * from productos',(error, rows)=>{
        console.log(rows);
        res.render('index.ejs',{rows})
    })
    })


app.listen(port)