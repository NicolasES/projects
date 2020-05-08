module.exports = class ProjectController {
    constructor({ projectService }) {
        this.projectService = projectService
    }

    list(req, res) {
        this.projectService.findAll().then(data => {
            res.json(data)
        })
    }

    find(req, res) {
        this.projectService.findOne(req.params.id).then(data => {
            res.json(data)
        })
    }

    create(req, res) {
        this.projectService.create(req.body).then(data => {
            res.json(data)
        })
    }

    delete(req, res) {
        this.projectService.deleteById(req.params.id).then(data => {
            res.json(data)
        })
    }
}