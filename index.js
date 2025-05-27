
const express = require('express');

const app = express();

// Routing
app.get('/',(req,res) => {
    res.send('Hola mundo en express')
})

app.get('/ecomerce', (req,res) => {
    res.send('Este es el Ecommerce')
})

app.listen(4000, () => {
    console.log('Server started on port 4000');
})