<template>
  <woo-layout style="height: 100vh">
    <woo-sider>
      <aside-menu></aside-menu>
    </woo-sider>
    <woo-layout>
      <woo-header>HEADER</woo-header>
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
  line-height: 120px;
}
.woo-sider {
  background-color: #8895b1;
  line-height: 160px;
}
.woo-footer {
  background-color: #546c8c;
}
</style>
