const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const MktItem = sequelize.define('mkt_items', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  usuario: Sequelize.STRING(10),
  descricao: Sequelize.STRING,
  quantidade: Sequelize.STRING(10),
  grupo: Sequelize.STRING(10),
  isbought: Sequelize.BOOLEAN,

}, {
  tableName: 'mkt_items',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = MktItem