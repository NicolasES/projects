module.exports = class ProjectAnnotationController {
    constructor({ projectAnnotationService }) {
        this.projectAnnotationService = projectAnnotationService
    }

    create(req, res, next) {
        this.projectAnnotationService.create(req.params.projectId, req.body).then(data => {
            res.status(201).json(data)
        }).catch(err => {
            next(err)
        })
    }

    update(req, res, next) {
        this.projectAnnotationService.update(req.params.projectId, req.params.annotationId, req.body).then(data => {
            res.json(data)
        }).catch(err => {
            next(err)
        })
    }

    delete(req, res, next) {
        this.projectAnnotationService.delete(req.params.projectId, req.params.annotationId).then(data => {
            res.status(204).json(data)
        }).catch(err => {
            next(err)
        })
    }
}
