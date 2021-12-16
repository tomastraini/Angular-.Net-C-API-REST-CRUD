const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
const port = 2000
var aplicacion =  fs.readFileSync("./src/app/app.component.html")
const connection = require('./db');


express.static(path.join( __dirname,'./dist/ProyectoAngularJS'));

app.use (express.static(path.join( __dirname,'./dist/ProyectoAngularJS')));


app.listen(port, (req, res)=>{
    console.log("Corriendo en puerto:"+port)
})