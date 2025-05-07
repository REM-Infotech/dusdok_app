import "@/assets/css/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.jsx";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
