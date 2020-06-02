const router = require('express').Router()
const container = require('./container')
const errorMiddleware = require('../application/middlewares/ErrorMiddleware')

const projectController = container.resolve('projectController')
const projectAnnotationController = container.resolve('projectAnnotationController')

//project
router.get('/projects', (req, res, next) => {
    return projectController.list(req, res, next)
})

router.get('/projects/:id', (req, res, next) => {
    return projectController.find(req, res, next)
})

router.post('/projects', (req, res, next) => {
    return projectController.create(req, res, next)
})

router.put('/projects/:id', (req, res, next) => {
    return projectController.update(req, res, next)
})

router.delete('/projects/:id', (req, res, next) => {
    return projectController.delete(req, res, next)
})

router.post('/projects/:projectId/annotations', (req, res, next) => {
    return projectAnnotationController.create(req, res, next)
})

router.put('/projects/:projectId/annotations/:annotationId', (req, res, next) => {
    return projectAnnotationController.update(req, res, next)
})




router.use(errorMiddleware)

module.exports = router