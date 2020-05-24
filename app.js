const express = require('express')
const path = require('path')
const pug = require('pug')
const bodyParser = require('body-parser')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const port = 3002
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res) => {
  res.render('404', { pageTitle: 'Not Found' })
})

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})