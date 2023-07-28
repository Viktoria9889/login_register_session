const User = require('../models/user')

const newUser = async (email, name, password) => {
    const user = new User({ email, name, password })
    return user
}

module.exports = {
    newUser
}