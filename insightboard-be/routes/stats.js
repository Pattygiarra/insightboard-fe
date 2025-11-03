const express = require('express')

const Router = express.Router()

Router.get('/', (req, res) => {
    const stats = {
        usersActive: Math.floor(Math.random()*10000),
        avgResponseTime: Math.floor(Math.random() *1000),
        errors: Math.floor(Math.random()*100),
        timestamp: new Date(),
    }
    res.json(stats)

})

module.exports = Router
