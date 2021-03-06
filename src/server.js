const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.set('view engine', 'html')
server.use(routes)

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    autoescape: false
})
server.listen(5000)