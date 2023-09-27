const express = require('express')

const controller = require('../controllers/co_usuario')

const router = express.Router()

const md_auth = require('../util/autenticacao')

// router.get('/form', (req, res) => {
//     res.render('formPostagem.ejs')
// })


router.post('/login', controller.login)
router.post('', md_auth.auth, controller.addUsuario)
router.patch('', md_auth.auth, controller.updUsuario)
router.delete('/:id', md_auth.auth, controller.delUsuario)
router.get('', md_auth.auth, controller.getUsuarios)
router.post('/email', controller.emailUsuarios)
router.get('/ping', controller.pingUsuario)
// router.get('/lista', md_auth.auth, controller.getUsuarios)

module.exports = router