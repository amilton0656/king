const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const PessoaContato = sequelize.define('pessoas_contatos', {
  id_contato: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  contato: Sequelize.STRING(50),
  observacao: Sequelize.STRING(50),
  id_pessoa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  id_tipo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  whatsapp: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

}, {
  tableName: 'pessoas_contatos',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = PessoaContato