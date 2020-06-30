<template>
  <woo-menu @select="handleMenuItemSelect" vertical>
    <woo-submenu index="2">
      <template #title>内容管理</template>
      <!-- <woo-menu-item index="/categories/create">新建分类</woo-menu-item> -->
      <!-- <woo-menu-item index="/categories/list">分类列表</woo-menu-item> -->
      <woo-menu-item index="categoriesEdit">新建分类</woo-menu-item>
      <woo-menu-item index="categoriesList">分类列表</woo-menu-item>
    </woo-submenu>
  </woo-menu>
</template>

<script>
import { WooMenu, WooMenuItem, WooSubmenu } from "woo-ui";
export default {
  name: "AsideMenu",
  data() {
    return {};
  },
  components: {
    WooMenu,
    WooMenuItem,
    WooSubmenu,
  },
  methods: {
    handleMenuItemSelect(index) {
      this.$router.push({ name: index });
      //   console.log(index);
    },
  },
};
</script>

<style scoped></style>
