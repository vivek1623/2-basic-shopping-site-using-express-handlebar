const express = require('express')

const products = require('../utils/db')

const router = express.Router()

router.get('/add-product', (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: "/admin/add-product"
  })
})

router.post('/product', (req, res) => {
  if (req.body.title && req.body.title.trim().length > 0) {
    products.push({
      title: req.body.title
    })
    res.redirect('/')
  } else {
    res.redirect('/admin/add-product')
  }
})

module.exports = router
