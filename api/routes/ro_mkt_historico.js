const express = require('express')

const controller = require('../controllers/co_mkt_historico')

const router = express.Router()

const md_auth = require('../util/autenticacao')

// router.get('/form', (req, res) => {
//     res.render('formPostagem.ejs')
// })


router.post('', controller.addMktHistorico)
router.patch('', controller.updMktHistorico)
router.delete('/:id', controller.delMktHistorico)
router.get('', controller.getMktHistoricos)

module.exports = router