const router = require('express').Router()
const container = require('./container')

router.get('/projects', (req, res) => {
    return container.resolve('projectController').list(req, res)
})

router.get('/projects/:id', (req, res) => {
    return container.resolve('projectController').find(req, res)
})

router.post('/projects', (req, res) => {
    return container.resolve('projectController').create(req, res)
})

router.delete('/projects/:id', (req, res) => {
    return container.resolve('projectController').delete(req, res)
})

module.exports = router