import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: () => {
        return { path: "/login" };
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.jsx"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/DashboardView.jsx"),
    },
  ],
});

export default router;
