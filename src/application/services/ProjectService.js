const Project = require('../models/Project')
const HttpException = require('../exceptions/HttpException')
const HttpStatus = require('http-status-codes')

module.exports = class ProjectService {
    constructor({ projectRepository }) {
        this.projectRepository = projectRepository
    }

    findAll() {
        return this.projectRepository.findAll()
    }

    async findOne(id) {
        let project = await this.projectRepository.findOne(id)
        if (!project) {
            throw new HttpException('Project not found.', HttpStatus.NOT_FOUND)
        }
        return project
    }

    async update(id, data) {
        let project = await this.projectRepository.findOne(id)
        if (!project) {
            throw new HttpException('Project not found.', HttpStatus.NOT_FOUND)
        }

        Object.assign(project, data)
        return this.projectRepository.update(project)
    }

    create(data) {
        let project = new Project(data)
        return this.projectRepository.create(project)
    }

    async deleteById(id) {
        let project = await this.projectRepository.findOne(id)
        if (!project) {
            throw new HttpException('Project not found.', HttpStatus.NOT_FOUND)
        }
        return this.projectRepository.delete(project)
    }
}
