import Vue from "vue";
import VueRouter from "vue-router";
import admin from "./admin/admin.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "admin",
    redirect: "/admin",
  },
  {
    path: "/admin",
    component: () => import("../views/admin"),
    children: admin,
    meta: {
      pageTitle: "الرئيسية",
    },
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
