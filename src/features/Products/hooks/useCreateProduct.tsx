import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Product } from "../types";
import { createProduct } from "../services/api";
import { productKeys } from "../queryKeys";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Omit<Product, "id" | " rating">) => {
      return createProduct(data);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [productKeys.all] });
    },
  });
};
