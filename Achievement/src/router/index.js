import { createRouter, createWebHistory } from 'vue-router'
import Task from '../views/TaskView.vue'
import Shop from '../views/ShopView.vue'
import Home from '../views/HomeView.vue'
import ItemDetailComponent from '../views/ItemDetailComponent.vue' // 商品詳情頁組件
import Achievementrask from '../views/Achievementrask.vue' // 成就任務組件
import Profile from '../views/MyTaskView.vue' // 成就任務組件

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Task', name: 'Task', component: Task },
  { path: '/Shop', name: 'Shop', component: Shop },
  { path: '/Profile', name: 'Profile', component: Profile },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetailComponent,
    props: true, // 允許將路由參數作為屬性傳遞
  },
  {
    path: '/Task/:id',
    name: 'Achievementrask',
    component: Achievementrask,
    props: true, // 允許將路由參數作為屬性傳遞
  },
  {
    path: '/',
    redirect: '/task', // 預設跳轉到任務頁
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
