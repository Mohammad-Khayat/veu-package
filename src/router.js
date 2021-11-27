import Vue from "vue";
import VueRouter from "vue-router";
import admin from "@/app/Admin/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "admin",
    redirect: "/admin",
  },
  {
    path: "/admin",
    component: () => import("@/app/Admin/modules/admin.vue"),
    children: admin,
    meta: {
      pageTitle: "الرئيسية",
    },
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isLogedIn()) next({ name: 'Login' })
//   if(to.name =='Login' && isLogedIn()) next({name:'admin'})
//   next()
// })
export default router;
