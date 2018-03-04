import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import index from './components/index.vue'
import about from './components/about.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

var router = new VueRouter({
	mode: 'history',
	routes: 
	[
		{ path: '/', component: index },
		{ path: '/about', component: about }
	]
})

var app = new Vue({
  el: '#app',
  router: router
})
