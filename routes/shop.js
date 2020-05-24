const express = require('express')

const products = require('../utils/db')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('products', products)
  res.render('shop', {
    pageTitle: 'shop',
    products: products,
    path: "/"
  })
})

module.exports = router