const express = require('express')
const router = express.Router()

const {login} = require('../controllers/auth.controller')
const {register} = require('../controllers/auth.controller')
// login
router.post('/login', login)
// register
router.post('/register', register)

module.exports = router