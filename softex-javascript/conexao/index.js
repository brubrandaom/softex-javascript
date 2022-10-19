const express = require('express');
const conexao = require('./models/db');
const app = express();

const db = require('./models/db');

app.get('/', async (req, res) => {
    res.send("Página inicial");
});

conexao.authenticate()
.then(()=>{
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(()=>{
    console.log("ERRO!");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
