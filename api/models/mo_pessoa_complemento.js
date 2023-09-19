const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const PessoaComplemento = sequelize.define('pessoas_complemento', {
  id_dados: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data_nascimento: {
    type: Sequelize.DATE,
    allowNull: true
  },

  nacionalidade: Sequelize.STRING(20),
  sexo: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: true
  },
  data_casamento: {
    type: Sequelize.DATE,
    allowNull: true
  },
  profissao: Sequelize.STRING(30),
  numero_dependentes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true
  },
  rg: Sequelize.STRING(20),
  data_expedicao: {
    type: Sequelize.DATE,
    allowNull: true
  },
  orgao_emissor_uf: Sequelize.STRING(15),
  tempo_empresa: Sequelize.STRING(10),
  cargo: Sequelize.STRING(50),
  remuneracao: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: true
  },
  outras_rendas_valor: Sequelize.STRING(50),
  id_empresa: Sequelize.INTEGER,
  id_pessoa: Sequelize.INTEGER,
  estado_civil: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: true
  },
  regime_casamento: {
    type: Sequelize.INTEGER,
    defaultValue: 4,
    allowNull: true
  },
  pacto_nupcial: Sequelize.TEXT,
  id_conjuge: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  conjuge_nome: Sequelize.STRING(50),
  empresa_nome: Sequelize.STRING(50),
  financ_descricao: Sequelize.STRING(50),
  financ_valor: Sequelize.DECIMAL(10, 2),
  financ_prazo: Sequelize.STRING(30),
  companheiro_nome: Sequelize.STRING(50),
  conjuge_cpf: Sequelize.STRING(14),
  uniao_estavel: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: true
  }


}, {
  tableName: 'pessoas_complemento',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = PessoaComplemento