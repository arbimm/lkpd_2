const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/user')

router.get('/users', usercontroller.index)

router.post('/users', usercontroller.store)

router.put('/user/:id', usercontroller.ubah)

router.delete('/user/:id', usercontroller.hapus)

module.exports = router