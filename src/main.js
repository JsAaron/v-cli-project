import Vue from 'vue'
const VueRouter = require('vue-router')
import { configRouter } from './route-config'

Vue.use(VueRouter)

const router = new VueRouter()
const app = require('./app.vue')

configRouter(router)

const App = Vue.extend(app)

router.start(App, '#app')
