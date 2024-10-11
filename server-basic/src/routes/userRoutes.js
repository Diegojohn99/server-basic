const express = require('express')
const {
    getUser,
    createUser,
} = require('../controllers/userControllers')

const router = express.Router()

router.get('/users:', getUser)
router.post('/users:', createUser)

module.exports = router