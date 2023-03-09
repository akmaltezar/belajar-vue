import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Login from "./views/Login.vue";
import Anime from "./views/Anime.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/anime",
    name: "Anime",
    component: Anime,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// export default router;
createApp(App).use(router).mount("#app");
