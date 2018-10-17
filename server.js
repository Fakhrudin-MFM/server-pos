const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const routes = require('./routes/')
app.use(routes)

const port = process.env.PORT || 8000
app.listen(port, process.env.IP, () => {
	console.log('Server running on port : ', port)
})

module.exports = app