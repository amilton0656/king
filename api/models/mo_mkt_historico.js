const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const MktHistorico = sequelize.define('mkt_historico', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  descricao: Sequelize.STRING,
}, {
  tableName: 'mkt_historico',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = MktHistorico