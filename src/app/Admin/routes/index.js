export default [
  {
    name: "Home",
    path: "home",
    components: {
      default: () => import("../modules/home"),
    },

    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "admin",
          icon: "fas fa-home",
        },

      ],
    },
  },
  {
      path:'/',
      redirect:'/admin/home'
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../modules/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../modules/auth/Register.vue"),
  },
 
];
