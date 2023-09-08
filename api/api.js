const express = require("express");
const app = express()
const dotenv = require('dotenv');
dotenv.config()
require("./config/database");
const port = process.env.PORT

// para utilizar json en los envíos
app.use(express.json())

//Archivos estaticos  
app.use(express.static('src/public'));

app.use(require('./routes/routes'));

//listen
app.listen(port , () =>{    
    console.log('Escuchando del puerto ' + port)
});