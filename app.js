const express = require('express');
const app = express();

app.use(express.dinamic);

app.listen(3000);
console.log('Express inicializando...')