const HttpException = require('../exceptions/HttpException')
const HttpStatus = require('http-status-codes')

module.exports = class ProjectAnnotationService {
    constructor({ projectRepository }) {
        this.projectRepository = projectRepository
    }

    async create(projectId, data) {
        let project = await this._getProject(projectId)
        let annotation = project.annotations.create(data)
        project.annotations.push(annotation)
        await this.projectRepository.update(project)
        return annotation
    }

    async update(projectId, annotationId, data) {
        let project = await this._getProject(projectId)
        
        let annotation = project.annotations.id(annotationId)
        if (!annotation) {
            throw new HttpException('Annotation not found.', HttpStatus.NOT_FOUND)
        }

        Object.assign(annotation, data)
        await this.projectRepository.update(project)
        return annotation
    }

    async delete(projectId, annotationId) {
        let project = await this._getProject(projectId)
        let annotation = project.annotations.id(annotationId)
        if (!annotation) {
            throw new HttpException('Annotation not found.', HttpStatus.NOT_FOUND)
        }
        annotation.remove()
        await this.projectRepository.update(project)
        return true
    }

    async _getProject(projectId) {
        let project = await this.projectRepository.findOne(projectId)
        if (!project) {
            throw new HttpException('Project not found.', HttpStatus.NOT_FOUND)
        }

        return project
    }
}
