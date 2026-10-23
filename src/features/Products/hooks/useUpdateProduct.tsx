import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Product } from "../types";
import { updateProduct } from "../services/api";
import { productKeys } from "../queryKeys";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Omit<Product, "id" | "rating">;
    }) => {
      return updateProduct(id, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [productKeys.all] });
    },
  });
};
