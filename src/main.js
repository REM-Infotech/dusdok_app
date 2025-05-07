import "@/assets/css/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import { createBootstrap } from "bootstrap-vue-next";
import App from "./App.jsx";
import router from "./router";

// Add the necessary CSS
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
const pinia = createPinia();
const bootstrap = createBootstrap();

app.use(pinia);
app.use(router);
app.use(bootstrap);

app.mount("#app");
