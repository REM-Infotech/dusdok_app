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
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/DashboardView.vue"),
    },
    {
      path: "/envio-documento",
      name: "envio-documento",
      component: () => import("../views/dashboard/pendencias/EnvioDocumentoView.vue"),
    },
    {
      path: "/info-complementar",
      name: "info-complementar",
      component: () => import("../views/dashboard/pendencias/InformacoesComplementacaoView.vue"),
    },
  ],
});

export default router;
