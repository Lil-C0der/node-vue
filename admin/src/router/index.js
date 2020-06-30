import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/home/Main.vue";
import CategoryEdit from "../views/home/childCPNT/category/categoryEdit.vue";
import CategoryList from "../views/home/childCPNT/category/categoryList.vue";

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
