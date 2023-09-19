const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const Pessoa = sequelize.define('pessoas', {
  id_pessoa: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: Sequelize.STRING(70),
  endereco: Sequelize.STRING(50),
  complemento: Sequelize.STRING(50),
  bairro: Sequelize.STRING(20),
  municipio: Sequelize.STRING(30),
  uf: Sequelize.STRING(2),
  cep: Sequelize.STRING(9),
  tipo_pessoa: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  cpf_cnpj: Sequelize.STRING(20),
  correspondencia: Sequelize.INTEGER,
  cod_msm: Sequelize.INTEGER,
  codigo_contabilidade: Sequelize.DECIMAL(6, 0),
  apelido: Sequelize.STRING(20),
  codigo_cobcaixa: Sequelize.STRING(15),
  bloqueio: Sequelize.INTEGER,
  edicao_bloqueada: Sequelize.INTEGER,
  observacao: Sequelize.TEXT,
  ctb_conta: Sequelize.INTEGER,
  ctb_enviado: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  dt_enviotabelas: Sequelize.DATE,
  senha: Sequelize.STRING(20),
  facebook: Sequelize.STRING(70),
  pinterest: Sequelize.STRING(70),
  instagram: Sequelize.STRING(70),
  num_creci: Sequelize.STRING(20),
  adm: Sequelize.BOOLEAN,
  admin: Sequelize.INTEGER,
  banco: Sequelize.STRING(10),
  agencia: Sequelize.STRING(10),
  num_creci: Sequelize.STRING(20),

}, {
  tableName: 'pessoas',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Pessoa