import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Project from './views/Project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path: '/projects',
			name: 'Projects',
			component: Home
		},
		{ path: '/projects/:slug',
			name: 'Project Detail',
			component: Project
		}
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
            resolve(savedPosition);
          } else {
            resolve({ x: 0, y: 0 });
          }
      }, 600);
    });
  }
})
