const PessoaContato = require('../models/mo_pessoa_contato')
const jwt = require('../util/jwt')

exports.addPessoaContato = (req, res, next) => {
  const contato = req.body
  PessoaContato.create(contato)
    .then(contato => {
      res.status(200).json(contato)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updPessoaContato = (req, res, next) => {
  const id = req.body.id_contato
  const body = req.body
  console.log(body)
  PessoaContato.findByPk(id)
    .then(contato => {
      contato.update(body)
    })
    .then(contato => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao atualizar.')
    })
}

exports.delPessoaContato = (req, res, next) => {
  const id = req.params.id_contato

  PessoaContato.findByPk(id)
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

exports.getPessoaContatoById = (req, res, next) => {
  const id = req.params.id_pessoa
  PessoaContato.findByPk(id)
    .then(contato => {
      res.status(200).json(contato)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getPessoaContatosByIdPessoa = (req, res, next) => {

  const id_pessoa = req.params.id_pessoa

  PessoaContato.sequelize.query(`
  select *
  from pessoas_contatos
  where id_pessoa = :id_pessoa`,
  { replacements: { id_pessoa } })
    .then(contatos => {
      res.status(200).json(contatos[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}
