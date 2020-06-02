module.exports = class ProjectController {
    constructor({ projectService }) {
        this.projectService = projectService
    }

    list(req, res, next) {
        this.projectService.findAll().then(data => {
            res.json(data)
        }).catch(err => {
            next(err)
        })
    }

    find(req, res, next) {
        this.projectService.findOne(req.params.id).then(data => {
            res.json(data)
        }).catch(err => {
            next(err)
        })
    }

    create(req, res, next) {
        this.projectService.create(req.body).then(data => {
            res.status(201).json(data)
        }).catch(err => {
            next(err)
        })
    }

    update(req, res, next) {
        this.projectService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(err => {
            next(err)
        })
    }

    delete(req, res, next) {
        this.projectService.deleteById(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(err => {
            next(err)
        })
    }
}