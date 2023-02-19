import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
      meta: {
        title: "About",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title } | Side Bar`;
  next();
});

export default router;
