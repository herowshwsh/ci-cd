import { createMemoryHistory, createRouter,createWebHashHistory,createWebHistory } from 'vue-router'

import MyView from './../components/my.vue'

import CicDView from './../components/cicd.vue'


const routes = [
  { path: '/', component: CicDView },
  { path: '/CI-CD', component: CicDView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router