const port =process.env.port || 4000;

const db_host =process.env.db_host || 'localhost';
const db_user =process.env.db_user || 'root';
const db_password =process.env.db_password || '3555';
const db_name =process.env.db_name || 'productos';
const db_port =process.env.db_port || 3306;
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
    port: db_port,
  })
//middlewares
    // app.set('index')
     app.use(express.static(path.join(__dirname, 'views')))
 
//rutas
    app.get('/', (req, res)=>{
        var query = connection.query('SELECT * from productos',(error, rows)=>{
            if(error) throw error;

            if(!error){
               console.log(rows);
               res.json(query[0])
            }
    })
    })


    app.listen(4000, function(){
        console.log('servidor en linea')
      })