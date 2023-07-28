//midleware який буде передавати функцію щоб приховати всі роути і перенаправляти на реєстрацію якщо хтось пробує зайти по якійсь силці, наприклад http://localhost:4000/add
module.exports = function(req, res, next) {
    if (!req.session.isAuthenticated) {
        return res.redirect('/auth')
    }

    next()
}