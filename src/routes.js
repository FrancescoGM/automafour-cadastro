const express = require('express')
const clients = require('./clients')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('pages/home')
})
routes.get('/register-client', (req, res) => {
    res.render('pages/register-client', { year: 2020, maxYear: 2040 })
})
routes.get('/clients', clients.showClients)
routes.get('/clients/:id', clients.showClient)
routes.post('/register-client', clients.registerClient)
module.exports = routes