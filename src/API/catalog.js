import api from "./axios";

// Запрашиваем список товаров. await ждёт ответ сервера.
export async function getProducts() {
  const response = await api.get("/products/");
  // response.data — данные, которые вернул backend.
  return response.data;
}

// Запрашиваем список категорий тем же способом.
export async function getCategories() {
  const response = await api.get("/categories/");
  return response.data;
}

// Приводим товар с backend к формату, который используют корзина и карточка.
export function toCartProduct(product) {
  let image = product.image_url;

  if (image) {
    try {
      image = new URL(image, api.defaults.baseURL).href;
    } catch {
      image = "";
    }
  }

  return {
    id: product.id,
    title: product.name,
    description: product.description || "",
    price: Number(product.price),
    image,
  };
}
