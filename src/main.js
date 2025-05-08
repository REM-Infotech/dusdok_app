import { createPinia } from "pinia";
import { createApp } from "vue";

import "@/assets/css/base.css";
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/default.css";
import App from "./App.jsx";

import router from "./router";
// Add the necessary CSS

const app = createApp(App);
const pinia = createPinia();
const bootstrap = createBootstrap();

app.use(pinia);
app.use(router);
app.use(bootstrap);

app.mount("#app");
