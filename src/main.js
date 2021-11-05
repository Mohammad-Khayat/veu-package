import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import bootstrapVue from "bootstrap-vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/_custom.scss";
import './global-components'
import "@braid/vue-formulate/themes/snow/snow.scss";
Vue.config.productionTip = false;
Vue.use(bootstrapVue);
import VueFormulate from "@braid/vue-formulate";
Vue.use(VueFormulate);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
