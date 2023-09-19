const express = require('express')

const controller = require('../controllers/co_pessoa_complemento')

const router = express.Router()

const md_auth = require('../util/autenticacao')

router.post('/add', controller.addPessoaComplemento)
router.put('/upd', controller.updPessoaComplemento)
router.delete('/del/:id', controller.delPessoaComplemento)
router.get('/lista/id/:id_pessoa', controller.getPessoaComplementoByIdPessoa)

module.exports = router