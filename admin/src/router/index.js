import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/home/Main.vue";
import CategoryEdit from "../views/home/childCPNT/category/CategoryEdit.vue";
import CategoryList from "../views/home/childCPNT/category/CategoryList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/categories/create",
        name: "categoriesEdit",
        component: CategoryEdit,
      },
      {
        path: "/categories/edit/:id",
        name: "categoriesEdit",
        component: CategoryEdit,
        // 通过 props 传参并与路由解耦 无需使用 this.$route.params.id 获取参数
        props: true,
      },
      {
        path: "/categories/list",
        name: "categoriesList",
        component: CategoryList,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
