import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/AllProducts",
    name: "AllProducts",
    component: () => import("@/views/AllProducts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
