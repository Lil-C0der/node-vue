module.exports = (app) => {
  const express = require("express");
  // express 子路由
  const router = express.Router();
  // Category 模型
  const Category = require("../../models/Category");

  // 获取分类列表
  router.get("/categories", async (req, res) => {
    const items = await Category.find().limit(10);
    res.send(items);
  });

  // 新增分类
  router.post("/categories", async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
  });

  // 根据 id 查询分类
  router.get("/categories/:id", async (req, res) => {
    const model = await Category.findById(req.params.id);
    res.send(model);
  });

  // 修改分类
  router.put("/categories/:id", async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body);
    model.name = req.body;
    res.send(model);
  });

  app.use("/admin/api", router);
};
