import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/price",
    name: "Price",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Price.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/network",
    name: "Network",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Network.vue"),
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Project.vue"),
  },
  {
    path: "/partner",
    name: "Partner",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Partner.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
