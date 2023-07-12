const express = require('express')
const server = express()
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo')

const homeRoutes = require('./routes/home')
const loginRoutes = require('./routes/auth')

const mongoUrl = 'mongodb://127.0.0.1:27017/login'


server.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/login',
        stringify: false,
    })
}))


server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))
server.use(express.urlencoded({ extended: true }))

server.use('/', homeRoutes)
server.use('/auth', loginRoutes)

mongoose.connect(mongoUrl)

server.listen(4000)