import Vue from "vue";
import App from "./App.vue";

import { WooPlugin } from "woo-ui";
import "woo-ui/dist/woo.css";
import router from './router'
Vue.use(WooPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
