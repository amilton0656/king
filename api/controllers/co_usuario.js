const Usuario = require('../models/mo_usuario')
const jwt = require('../util/jwt')
const email = require('../testes/email')

exports.addUsuario = (req, res, next) => {
  const usuario = req.body
  Usuario.create(usuario)
    .then(usuario => {
      res.status(200).json(usuario)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updUsuario = (req, res, next) => {
  const id = req.body.id
  const body = req.body
  console.log(id)
  console.log(body)
  Usuario.findByPk(id)
    .then(usuario => {
      usuario.update(body)
    })
    .then(usuario => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao atualizar.')
    })
}

exports.delUsuario = (req, res, next) => {
  const id = req.params.id

  Usuario.findByPk(id)
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
  // const id = req.params.id

  // Usuario.sequelize.query(`
  // delete from usuarios where id = :id`,
  // { replacements: { id } })
  //   .then(usuario => {
  //     res.status(200).json(parseInt(id))
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
  //   });
}

exports.getUsuarioById = (req, res, next) => {
  const id = req.params.id
  Usuario.findByPk(id)
    .then(usuario => {
      res.status(200).json(usuario)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getUsuarioByNome = (req, res, next) => {
  const { nome } = req.params
  const busca = '%' + nome.toLowerCase() + '%'

  Usuario.sequelize.query(`select *
  from usuarios
  where lower(nome) like :busca
  order by nome`,
    { replacements: { busca } })
    .then(usuario => {
      res.status(200).json(usuario[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}

exports.emailUsuarios = (req, res, next) => {
  const { to, subject, text } = req.body
  email(to, subject, text)

  res.status(200).json('Email anviado.')
}

exports.pingUsuario = (req, res, next) => {

  res.status(200).json('ping ok.')
}

exports.getUsuarios = (req, res, next) => {
  Usuario.sequelize.query(`
  select *
  from usuarios
  order by nome`)
    .then(usuarios => {
      res.status(200).json(usuarios[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}

exports.login = (req, res, next) => {
  const { email, senha } = req.body

  Usuario.sequelize.query(`
  select id, nome
  from usuarios
  where email = ?
  and senha = ?`,
    { replacements: [email, senha] })
    .then(usuarios => {
      const resp = usuarios[0]

      if (resp.length > 0) {
        res.status(200).json({
          auth: true,
          id: resp[0].id,
          usuario: resp[0].nome,
          token: jwt.createToken(req.body)
        })
      } else {
        res.status(201).json({
          auth: false,
          usuario: {},
          token: ''

        })
      }
    })
    .catch(err => {
      console.log('entrou no catch')
      res.status(500).json({
        auth: false,
        usuario: {},
        token: ''

      })
    })
}





