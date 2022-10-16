const express = require('express');
const app = express();
app.listen(5001);

app.get('/welcome', (req, res)=>{
    res.send('Hello, world!')
})

app.get('/users/:nome', (req, res)=>{
    res.send('Olá, '+req.params.nome+'!');
})