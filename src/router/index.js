import { createRouter, createWebHistory } from "vue-router";
import Details from "@/views/productDetail.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/AllProducts.vue"),
  },
  // {
  //   path: "/AllProducts",
  //   name: "AllProducts",
  //   component: () => import("@/views/AllProducts.vue"),
  // },
  {
    path: "/product/:productId",
    name: "details",
    component: Details,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
