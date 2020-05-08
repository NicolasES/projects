import axios from 'axios'

export default {
    getProjects() {
        return axios.get('/projects')
    }
}