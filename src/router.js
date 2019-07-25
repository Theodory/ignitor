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
	  // will match everything
	  path: '*',
	  component: NotFound
	},
	{
		path: "/",
		name: "Home",
		component: Home
	},{
		path: "/post",
		name: "Post",
		component: Post
	},
	]
});