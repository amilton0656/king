const MktItem = require('../models/mo_mkt_item')
const jwt = require('../util/jwt')
const email = require('../testes/email')

exports.addMktItem = (req, res, next) => {
  const registro = req.body
  MktItem.create(registro)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updMktItem = (req, res, next) => {
  const id = req.body.id
  const body = req.body
  console.log(id)
  console.log(body)
  MktItem.findByPk(id)
    .then(registro => {
      registro.update(body)
    })
    .then(registro => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao atualizar.')
    })
}

exports.delMktItem = (req, res, next) => {
  const id = req.params.id

  MktItem.findByPk(id)
    .then(usu => {
      usu.destroy(usu)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
  // const id = req.params.id

  // registro.sequelize.query(`
  // delete from registros where id = :id`,
  // { replacements: { id } })
  //   .then(registro => {
  //     res.status(200).json(parseInt(id))
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
  //   });
}

exports.getMktItemById = (req, res, next) => {
  const id = req.params.id
  MktItem.findByPk(id)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Resistro não encontrado.')
    })
}

exports.getMktItemByDescricao = (req, res, next) => {
  const { descricao } = req.params
  const busca = '%' + descricao.toLowerCase() + '%'

  MktItem.sequelize.query(`select *
  from mkt_items
  where lower(descricao) like :busca
  order by descricao`,
    { replacements: { busca } })
    .then(registro => {
      res.status(200).json(registro[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}


exports.getMktItems = (req, res, next) => {
  MktItem.sequelize.query(`
  select *
  from mkt_items
  order by descricao`)
    .then(registros => {
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}







