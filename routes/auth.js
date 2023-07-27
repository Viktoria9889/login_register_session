const { Router } = require('express')
const router = Router()
const authCtrl = require('../controllers/auth').strategies.local


router.get('/', (req, res) => {
    res.render('login')
})

router.route('/login').post(authCtrl.login)

router.route('/register').post(authCtrl.register)

router.route('/logout').get(authCtrl.logout)

module.exports = router