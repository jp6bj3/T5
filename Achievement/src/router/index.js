import { createRouter, createWebHistory } from "vue-router";
import Task from "../views/TaskView.vue";
import Shop from "../views/ShopView.vue";
import Home from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Task", name: "Task", component: Task },
  { path: "/Shop", name: "Shop", component: Shop },
  {
    path: '/',
    redirect: '/task', // 預設跳轉到任務頁
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
