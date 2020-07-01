import instance from "./http";

export function saveCategoryEdit(model) {
  return instance({
    url: "categories",
    method: "POST",
    data: model,
  });
}

export function getCategoryList() {
  return instance({
    url: "categories",
    method: "GET",
  });
}

export function getCategoryById(id) {
  return instance({
    url: `categories/${id}`,
    method: "GET",
  });
}

export function updateCategoryName(id, name) {
  return instance({
    url: `categories/${id}`,
    data: {
      name,
    },
    method: "PUT",
  });
}
