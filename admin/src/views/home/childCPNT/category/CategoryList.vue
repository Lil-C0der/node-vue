<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items" style="width: 100%">
      <el-table-column type="index" label="ID" width="80"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template v-slot:default="scope">
          <woo-button
            type="primary"
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            >编辑
          </woo-button>
          <woo-button type="danger">删除</woo-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCategoryList } from "@/network/categories.js";

export default {
  name: "CategoryList",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getList() {
      const res = await getCategoryList();
      this.items = res.data;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
div /deep/ .woo-button {
  margin: 6px 2px;
}
</style>
