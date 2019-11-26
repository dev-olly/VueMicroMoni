import Vue from "vue";
import axios from "axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/components/index";

Vue.use(VueToast);
Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "https://micromoni.herokuapp.com/"
});

Vue.prototype.$http = base;

// universal style
import "@/assets/css/style.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
