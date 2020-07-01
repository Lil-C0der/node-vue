import Vue from "vue";
import App from "./App.vue";

import { WooPlugin } from "woo-ui";
import woo from "./woo";
import "woo-ui/dist/woo.css";

import element from "./element";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";

Vue.use(WooPlugin);
Vue.use(woo);
Vue.use(element);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
