const Project = require('../models/Project')

module.exports = class ProjectRepository {
    findAll() {
        return Project.find({}, { annotations: 0})
    }

    findOne(id) {
        return Project.findById(id).then(project => project).catch(() => null)
    }

    create(project) {
        return Project.create(project)
    }

    update(project) {
        return project.save()
    }

    delete(project) {
        return Project.deleteOne({ _id: project._id })
    }
}