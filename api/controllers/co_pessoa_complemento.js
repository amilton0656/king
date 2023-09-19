const PessoaComplemento = require('../models/mo_pessoa_complemento')
const jwt = require('../util/jwt')

exports.addPessoaComplemento = (req, res, next) => {
  const pessoa = req.body
  PessoaComplemento.create(pessoa)
    .then(pessoa => {
      res.status(200).json(pessoa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updPessoaComplemento = (req, res, next) => {
  console.log('dataFormII ', req.body)
  const id = req.body.id_dados
  const body = req.body
  PessoaComplemento.findByPk(id)
    .then(pessoa => {
      pessoa.update(body)
    })
    .then(pessoa => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao atualizar.')
    })
}

exports.delPessoaComplemento = (req, res, next) => {
  const id = req.params.id_pessoa

  PessoaComplemento.findByPk(id)
    .then(usu => {
      usu.destroy(usu)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getPessoaComplementoById = (req, res, next) => {
  const id = req.params.id_pessoa
  PessoaComplemento.findByPk(id)
    .then(pessoa => {
      res.status(200).json(pessoa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getPessoaComplementoByIdPessoa = (req, res, next) => {

  const id_pessoa = req.params.id_pessoa

  PessoaComplemento.sequelize.query(`
  select *
  from pessoas_complemento
  where id_pessoa = :id_pessoa`,
  { replacements: { id_pessoa } })
    .then(pessoas => {
      res.status(200).json(pessoas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}
