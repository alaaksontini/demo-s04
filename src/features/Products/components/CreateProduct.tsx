import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  productFormSchema,
  type ProductFormInput,
  type ProductFormData,
} from "../productFormSchema";
import type { Product } from "../types";
import { useCreateProduct } from "../hooks/useCreateProduct";

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormInput, unknown, ProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: { title: "", price: 0, category: "", image: "" },
    mode: "onBlur",
  });

  const { mutate, isPending, isError, error } = useCreateProduct();

  const submitHandler = (data: ProductFormData) => {
    const product: Product = {
      id: 0,
      title: data.title,
      price: data.price,
      category: data.category,
      image: data.image,
      rating: { rate: 0, count: 0 },
    };
    mutate(product, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm"
    >
      <h1 className="text-xl font-bold text-gray-900">Create Product</h1>

      <div className="space-y-1">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          {...register("title")}
          placeholder="Product title"
          className={inputClass}
        />
        {errors.title && (
          <p className="text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          {...register("price")}
          placeholder="0.00"
          className={inputClass}
        />
        {errors.price && (
          <p className="text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <input
          id="category"
          {...register("category")}
          placeholder="e.g. electronics"
          className={inputClass}
        />
        {errors.category && (
          <p className="text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image URL
        </label>
        <input
          id="image"
          {...register("image")}
          placeholder="https://example.com/image.jpg"
          className={inputClass}
        />
        {errors.image && (
          <p className="text-sm text-red-600">{errors.image.message}</p>
        )}
      </div>

      {isError && (
        <p className="text-sm text-red-600">
          Failed to create product: {error?.message}
        </p>
      )}

      <input
        type="submit"
        disabled={isPending}
        className="w-full cursor-pointer rounded-md bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
        value={isPending ? "Creating..." : "Create Product"}
      />
    </form>
  );
};

export default CreateProduct;
