const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const Usuario = sequelize.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: Sequelize.STRING(60),
  email: Sequelize.STRING(70),
  senha: Sequelize.STRING(20),
  imagem: Sequelize.BLOB('medium'),
}, {
  tableName: 'usuarios',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Usuario