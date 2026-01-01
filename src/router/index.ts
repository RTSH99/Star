import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.tsx";
import ProductShowcase from "../views/ProductShowcase.tsx";
import AboutView from "../views/AboutView.tsx";
import UnderConstruction from "../views/UnderConstruction.tsx";

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
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: UnderConstruction,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
