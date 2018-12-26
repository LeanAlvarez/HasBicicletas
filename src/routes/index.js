const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const router = express.Router()


router.get('/', (req,res) => {
    res.render('index', {
        title: 'Has Bicicletas | Home'
    })
})

router.get('/contacto', (req,res) => {
    res.render('contact', {
        title: 'Has Bicicletas | Contacto'
    })
})



module.exports = router