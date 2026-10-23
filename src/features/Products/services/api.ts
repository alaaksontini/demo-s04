import api from "../../../shared/http/ApiClient";
import type { Product } from "../types";

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const fetchProduct = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (data: Omit<Product, "id" | "rating">) => {
  const response = await api.post("/products", data);
  return response.data;
};

export const updateProduct = async (
  id: number,
  data: Omit<Product, "id" | "rating">,
) => {
  const response = await api.patch(`/products/${id}`, data);
  return response.data;
};

export const productApi = {
  fetchProducts: () => api.get("/products"),
  fetchProduct: (id: number) => api.get(`/products/${id}`),
  createProduct: (data: Omit<Product, "id" | "rating">) =>
    api.post("/products", data),
  updateProduct: (id: number, data: Omit<Product, "id" | "rating">) =>
    api.patch(`/products/${id}`, data),
};
