const awilix = require('awilix')

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode
})

// CONTROLLERS
const ProjectController = require('../application/controllers/ProjectController')
container.register({
    projectController: awilix.asClass(ProjectController)
})

// SERVICES
const ProjectService = require('../application/services/ProjectService')
container.register({
    projectService: awilix.asClass(ProjectService)
})

// REPOSITORIES
const ProjectRepository = require('../application/repositories/ProjectRepository')
container.register({
    projectRepository: awilix.asClass(ProjectRepository)
})

module.exports = container