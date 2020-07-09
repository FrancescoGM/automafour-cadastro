const express = require('express')
const db = require('./database/db')
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
routes.post('/register-client', (req, res) => {
    console.log(req.body)
})
module.exports = routes