const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
// build server
const app = express()

// HTTP request logger middleware for node.js
app.use(morgan('combined'))
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json())
// providing a Connect/Express middleware
app.use(cors())

require('./routes')(app)

// sync with database from /models
sequelize.sync()
  .then(() => {
    // then start server
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
