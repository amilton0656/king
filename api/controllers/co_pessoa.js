const Pessoa = require('../models/mo_pessoa')
const jwt = require('../util/jwt')

exports.addPessoa = (req, res, next) => {
  const pessoa = req.body
  Pessoa.create(pessoa)
    .then(pessoa => {
      res.status(200).json(pessoa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })

}

exports.updPessoa = (req, res, next) => {
  const id = req.body.id_pessoa
  const body = req.body
  Pessoa.findByPk(id)
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

exports.delPessoa = (req, res, next) => {
  const id = req.params.id_pessoa

  Pessoa.findByPk(id)
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

  // pessoa.sequelize.query(`
  // delete from pessoas where id = :id`,
  // { replacements: { id } })
  //   .then(pessoa => {
  //     res.status(200).json(parseInt(id))
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
  //   });
}

exports.getPessoaById = (req, res, next) => {
  const id = req.params.id_pessoa
  Pessoa.findByPk(id)
    .then(pessoa => {
      res.status(200).json(pessoa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getPessoaByCPF = (req, res, next) => {
  const cpf = req.params.cpf_cnpj
  Pessoa.findOne({
     where: { cpf_cnpj: cpf } 
    })
    .then(pessoa => {
      res.status(200).json(pessoa)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getPessoaByNome = (req, res, next) => {
  const { nome } = req.params
  const busca = '%' + nome.toLowerCase() + '%'

  Pessoa.sequelize.query(`select *
  from pessoas
  where lower(nome) like :busca
  order by nome`,
  { replacements: { busca } })
    .then(pessoa => {
      res.status(200).json(pessoa[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}


exports.getPessoas = (req, res, next) => {
  Pessoa.sequelize.query(`
  select *
  from pessoas
  order by nome`)
    .then(pessoas => {
      res.status(200).json(pessoas[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}

exports.login = (req, res, next) => {
  const { nome, senha } = req.body

  Pessoa.sequelize.query(`
  select id, nome
  from pessoas
  where nome = :nome
  and senha = :senha`,
  { replacements: { nome, senha } })
    .then(pessoas => {
      const resp = pessoas[0]

      if (resp.length > 0) {
          res.status(200).json({
            auth: true, 
            id: resp[0].id,
            pessoa: resp[0].nome,
            token: jwt.createToken(req.body)      
          })  
      } else {
        res.status(201).json({
          auth: false, 
          pessoa: {},
          token: ''
        
        })  
      }
    })
    .catch(err => {
      console.log('entrou no catch')
      res.status(500).json({
        auth: false, 
        pessoa: {},
        token: ''
      
      })
    })
}





