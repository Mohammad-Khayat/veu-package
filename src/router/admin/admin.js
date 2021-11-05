export default [
  {
    name: "Home",
    path: "home",
    components: {
      default: () => import("@/views/admin/pages/home"),
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
  }
 
];
