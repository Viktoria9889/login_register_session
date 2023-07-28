const User = require('../../../models/user')


const login = async (email) => {
    const candidate = await User.findOne({ email })
    return candidate

}

const register = async (email, password, name) => {
    const candidate = await User.findOne({ email })
    return candidate
}

module.exports = {
    login,
    register
}