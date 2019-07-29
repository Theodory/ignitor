import Vue from "vue"
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Post from './components/PostList.vue'
import NotFound from './components/Notfound.vue'
Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	base: '/',
	linkActiveClass: "active",
	routes: [
	{
		path: '*',
		name: 'notfound',
		component: NotFound
	},
	{
		path: "/",
		name: "Home",
		component: Home
	},{
		path: "/posts",
		name: "Post",
		component: Post
	},
	]
});