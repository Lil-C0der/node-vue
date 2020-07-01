import Vue from "vue";
import { WooButton, WooInput } from "woo-ui";

const woo = () => {
  Vue.component("WooButton", WooButton);
  Vue.component("WooInput", WooInput);
};

export default woo;
