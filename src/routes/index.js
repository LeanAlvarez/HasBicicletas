const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const router = express.Router()


router.get('/', (req,res) => {
    res.render('index', {
        title: 'Has Bicicletas | Home'
    })
})



module.exports = router