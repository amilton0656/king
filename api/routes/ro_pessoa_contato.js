const express = require('express')

const controller = require('../controllers/co_pessoa_contato')

const router = express.Router()

const md_auth = require('../util/autenticacao')

router.post('/add', controller.addPessoaContato)
router.put('/upd', controller.updPessoaContato)
router.delete('/del/:id_contato', controller.delPessoaContato)
router.get('/lista/:id_pessoa', controller.getPessoaContatosByIdPessoa)

module.exports = router