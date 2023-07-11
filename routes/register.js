const { Router } = require('express')
const router = Router()
const User = require('../models/user')



router.get('/', (req, res) => {
    res.render('register', {
        title: 'Вхід',

    })
})
router.get('/logout', (req, res) => {
    //реалізація виходу з кабінету і очищення даних з бд
    req.session.destroy(() => {
        res.redirect('/auth')
    })
})


router.post('/register', async (req, res) => {
    try {
        const {email, password, repeat, name} = req.body
        const candidate = await User.findOne({ email })

        if (candidate) {
            res.redirect('/auth#registre')
        } else {
            const user = new User({
                email, name, password
            })
            await user.save()
            res.redirect('/auth#login')
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router