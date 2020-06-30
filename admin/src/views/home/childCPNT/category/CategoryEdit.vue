<template>
  <div>
    <h1>新建分类</h1>
    <woo-input v-model="model.name" placeholder="请输入名称"></woo-input>
    <woo-button type="primary" @click="save">保存</woo-button>
  </div>
</template>

<script>
import { WooButton, WooInput } from "woo-ui";

export default {
  name: "CategoryEdit",
  data() {
    return {
      model: {},
    };
  },
  components: { WooInput, WooButton },

  methods: {},
};
</script>

<style scoped></style>
