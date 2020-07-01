<template>
  <div>
    <h1>{{ title }}</h1>
    <woo-input v-model="model.name" placeholder="请输入名称"></woo-input>
    <woo-button type="primary" @click="save">保存</woo-button>
  </div>
</template>

<script>
import {
  saveCategoryEdit,
  getCategoryById,
  updateCategoryName,
} from "@/network/categories.js";

export default {
  name: "CategoryEdit",
  props: {
    id: { type: String },
  },
  data() {
    return {
      model: {},
    };
  },

  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await updateCategoryName(this.model);
        console.log(res);
      } else {
        res = await saveCategoryEdit(this.model);
      }
      this.$router.push("/categories/list");
      this.$toast("保存成功！", {
        closable: true,
      });
    },

    async getName() {
      if (this.id) {
        const res = await getCategoryById(this.id);
        this.model = res.data;
      }
    },
  },
  computed: {
    title() {
      return this.id ? "编辑分类" : "新建分类";
    },
  },
  mounted() {
    this.getName();
  },
};
</script>

<style scoped></style>
