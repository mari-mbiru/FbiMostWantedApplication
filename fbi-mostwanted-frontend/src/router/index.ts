import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import PersonDetail from '@/pages/PersonDetail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/wanted/:id', component: PersonDetail },
  ],
})

export default router