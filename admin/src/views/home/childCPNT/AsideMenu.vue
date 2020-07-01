<template>
  <woo-menu @select="handleMenuItemSelect" v-model="activeIndex" vertical>
    <woo-submenu index="2">
      <template #title>
        <i class="el-icon-takeaway-box"></i>
        内容管理
      </template>
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
    return {
      activeIndex: null,
    };
  },
  components: {
    WooMenu,
    WooMenuItem,
    WooSubmenu,
  },
  methods: {
    handleMenuItemSelect(index) {
      this.$router.push({ name: index });
    },
    getPath() {
      this.activeIndex = this.$route.name;
    },
  },
  created() {
    this.getPath();
  },
  watch: {
    $route: "getPath",
  },
};
</script>

<style scoped></style>
