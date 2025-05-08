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
      component: () => import("../views/auth/LoginView.tsx"),
    },
  ],
});

export default router;
