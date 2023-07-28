const {Router} = require('express')
const router = Router()
const authMidleware = require('../midleware/authMidleware')//мідлвейр який скриває роути від неавторизованих користувачів

router.get('/', authMidleware, (req, res) => {
    res.render('secretPage')
})

module.exports = router