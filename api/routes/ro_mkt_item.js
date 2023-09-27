const express = require('express')

const controller = require('../controllers/co_mkt_item')

const router = express.Router()

const md_auth = require('../util/autenticacao')

// router.get('/form', (req, res) => {
//     res.render('formPostagem.ejs')
// })


router.post('', controller.addMktItem)
router.patch('', controller.updMktItem)
router.delete('/:id', controller.delMktItem)
router.get('', controller.getMktItems)

module.exports = router