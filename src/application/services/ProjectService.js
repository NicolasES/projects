const Project = require('../models/Project')

module.exports = class ProjectService {
    constructor({ projectRepository }) {
        this.projectRepository = projectRepository
    }

    findAll() {
        return this.projectRepository.findAll()
    }

    findOne(id) {
        return this.projectRepository.findOne(id)
    }

    create(data) {
        let project = new Project(data)
        return this.projectRepository.create(project)
    }

    async deleteById(id) {
        let project = await this.projectRepository.findOne(id)
        return this.projectRepository.delete(project)
    }
}
