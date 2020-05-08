const Project = require('../models/Project')

module.exports = class ProjectRepository {
    findAll() {
        return Project.find({}, { annotations: 0})
    }

    findOne(id) {
        return Project.findById(id)
    }

    create(project) {
        return Project.create(project)
    }

    delete(project) {
        return Project.deleteOne({ _id: project._id })
    }
}