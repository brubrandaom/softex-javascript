const Sequelize = require('sequelize');
const conexao = new Sequelize("bruna", "root", "senha", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conexao;