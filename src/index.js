const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')

require('./server/dbConnection')

const routes = require('./server/routes')

app.use(cors())
app.use(express.json())
app.use(routes)


app.use(serveStatic(path.join(__dirname, '../frontend/dist')))

let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('Server started. PORT ' + port)
})