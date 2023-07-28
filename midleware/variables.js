//створюєм midleware який буде передавати функцію якщо юзер зареєстрований то відкривати роути, якщо ні то ховати
module.exports = function(req, res, next) {
    res.locals.isAuth = req.session.isAuthenticated

    next()
}