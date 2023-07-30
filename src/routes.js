import Home from './views/Home.vue'
import Project from './views/Project.vue'
import Assets from './views/Assets.vue'


export const routes = [
  { 
    path: '/', 
    component: Home,
  },
  {
    path: '/:id',
    component: Project,
  },
  {
    path: '/:type/:id',
    component: Assets,
  }
]