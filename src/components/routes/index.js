import { createRouter, createWebHistory } from "vue-router";
import HomeRoute from "./home.route";
import contactUs from "./contact.route";
import loginRoute from "./login.route";
import registerRoute from "./register.route";
const router = createRouter({
  history: createWebHistory(),
  routes: [...HomeRoute, ...contactUs, ...loginRoute, ...registerRoute],
});
export default router;
