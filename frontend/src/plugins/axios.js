import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})