const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/projects', { useNewUrlParser: true })
const db = mongoose.connection

// db.on('error', (err) => {
//     console.error('Connection error: ', err)
// })

// db.once('open', () => {
//     console.log('Database connected!')
// });

db.on('error', (err) => {
    console.log('Connection error: ' + err)
})

db.on('disconnected', () => {
    console.log('Database disconnected')
})

db.on('connected', () => {
    console.log('Database connected')
})