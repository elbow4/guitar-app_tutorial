const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// build server
const app = express()

// HTTP request logger middleware for node.js
app.use(morgan('combined'))
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json())
// providing a Connect/Express middleware
app.use(cors())

// endpoint
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
