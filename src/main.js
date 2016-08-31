import Vue from 'vue'
import configRouter from './route-config'

const VueRouter = require('vue-router')
const rootApp = require('./app.vue')

require('es6-promise').polyfill()

Vue.use(VueRouter)

const router = new VueRouter()
const App = Vue.extend(rootApp)

configRouter(router)

router.start(App, '#app')