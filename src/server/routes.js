const router = require('express').Router()
const container = require('./container')
const errorMiddleware = require('../application/middlewares/ErrorMiddleware')

//project
router.get('/projects', (req, res, next) => {
    return container.resolve('projectController').list(req, res, next)
})

router.get('/projects/:id', (req, res, next) => {
    return container.resolve('projectController').find(req, res, next)
})

router.post('/projects', (req, res, next) => {
    return container.resolve('projectController').create(req, res, next)
})

router.put('/projects/:id', (req, res, next) => {
    return container.resolve('projectController').update(req, res, next)
})

router.delete('/projects/:id', (req, res, next) => {
    return container.resolve('projectController').delete(req, res, next)
})




router.use(errorMiddleware)

module.exports = router