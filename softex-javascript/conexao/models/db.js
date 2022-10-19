const Sequelize = require('sequelize');
const conexao = new Sequelize("bancoDeDados", "root", "senha", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conexao;