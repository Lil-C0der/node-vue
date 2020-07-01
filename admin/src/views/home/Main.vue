<template>
  <woo-layout style="height: 100vh">
    <woo-sider>
      <aside-menu />
    </woo-sider>
    <woo-layout>
      <woo-header></woo-header>
      <woo-content>
        <router-view />
      </woo-content>
    </woo-layout>
  </woo-layout>
</template>

<script>
import { WooLayout, WooHeader, WooContent, WooSider } from "woo-ui";
import AsideMenu from "./childCPNT/AsideMenu";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    WooLayout,
    WooSider,
    WooHeader,
    WooContent,
    AsideMenu,
  },
  methods: {},
};
</script>

<style scoped>
.woo-header {
  background-color: #bcc2d7;
}
.woo-content {
  background-color: #eff1fe;
}
.woo-sider {
  background-color: #8895b1;
}
.woo-footer {
  background-color: #546c8c;
}
</style>
