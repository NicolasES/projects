const awilix = require('awilix')

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode
})

// CONTROLLERS
const ProjectController = require('../application/controllers/ProjectController')
const ProjectAnnotationController = require('../application/controllers/ProjectAnnotationController')
container.register({
    projectController: awilix.asClass(ProjectController),
    projectAnnotationController: awilix.asClass(ProjectAnnotationController)
})

// SERVICES
const ProjectService = require('../application/services/ProjectService')
const ProjectAnnotationService = require('../application/services/ProjectAnnotationService')
container.register({
    projectService: awilix.asClass(ProjectService),
    projectAnnotationService: awilix.asClass(ProjectAnnotationService)
})

// REPOSITORIES
const ProjectRepository = require('../application/repositories/ProjectRepository')
container.register({
    projectRepository: awilix.asClass(ProjectRepository)
})

module.exports = container