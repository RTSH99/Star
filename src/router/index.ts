import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.tsx";
import ProductShowcase from "../views/ProductShowcase.tsx";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductShowcase,
    },
  ],
});

export default router;
