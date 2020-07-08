const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('pages/home')
})
routes.get('/register-client', (req, res) => {
    res.render('pages/register-client')
})
routes.get('/clients', (req, res) => {
    res.render('pages/clients')
})

module.exports = routes