const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  type: 'application/x-www-form-urlencoded',
  extended: false 
}))

app.post('/', function (req, res) {
  console.log("req.body")
  console.log(req.body)
  res.send('thanks')
})

app.listen(3002)
