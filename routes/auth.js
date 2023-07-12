const { Router } = require('express')
const router = Router()
const User = require('../models/user')

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
    //реалізація виходу з кабінету і очищення даних з бд
    req.session.destroy(() => {
        res.redirect('/auth')
    })
})


router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({ email })
        //перевірка чи існує такий емейл і якщо існує то перевірити паролі на співпадіння
        if (candidate) {
            const areSame = password === candidate.password

            if (areSame) {
                req.session.user = candidate
                //req.session.isAuthenticated = true
                //добавляєм логіку щоб точно дочекатись поки юзер зайде
                req.session.save(err => {
                    if (err) {
                        res.redirect('/auth#login')
                    }
                    //якщо пароль вводиться вірний перенаправляєм на головну сторінку
                    res.redirect('/')
                })
            } else {
                //якщо не вірно то перенаправляєм на сторінку логіну ще раз
                res.redirect('/auth#login')
            }
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/register', async (req, res) => {
    try {
        const {email, password, repeat, name} = req.body
        const candidate = await User.findOne({ email })

        if (candidate) {
            res.redirect('/auth#registre')
        } else {
            const user = new User({ email, name, password })
            await user.save()
            res.redirect('/auth#login')
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router