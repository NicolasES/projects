import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ProjectsList from './components/projects/ProjectsList'
import Project from './components/projects/Project'

export default new Router({
    routes: [
        {
            path: '/',
            component: ProjectsList
        },

        {
            path: '/new',
            component: Project
        }
    ]
})