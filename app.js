const express = require('express')
const server = express()
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const mongoUrl = 'mongodb://127.0.0.1:27017/login'

mongoose.connect(mongoUrl)

server.use(session({
    secret: 'cat',
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    })
}))

const homeRoutes = require('./routes/home')
const loginRoutes = require('./routes/auth')

server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))
server.use(express.urlencoded({ extended: true }))

server.use('/', homeRoutes)
server.use('/auth', loginRoutes)



server.listen(4000)