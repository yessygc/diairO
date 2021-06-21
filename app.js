const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) =>{
    res.json({response: 'success'});
});

app.listen(3000, () =>{
    console.log('Express inicializando...');
});

// {}