import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router";
import {
  productFormSchema,
  type ProductFormInput,
  type ProductFormData,
} from "../productFormSchema";
import { fetchProduct } from "../services/api";
import { productKeys } from "../queryKeys";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: [productKeys.detail(Number(id))],
    queryFn: () => fetchProduct(Number(id)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormInput, unknown, ProductFormData>({
    resolver: zodResolver(productFormSchema),
    values: data
      ? {
          title: data.title,
          price: data.price,
          category: data.category,
          image: data.image,
        }
      : undefined,
    mode: "onBlur",
  });

  const {
    mutate,
    isPending,
    isError,
    error: mutationError,
  } = useUpdateProduct();

  const submitHandler = (formData: ProductFormData) => {
    mutate(
      {
        id: Number(id),
        data: {
          title: formData.title,
          price: formData.price,
          category: formData.category,
          image: formData.image,
        },
      },
      {
        onSuccess: () => navigate(`/products/${id}`),
      },
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm"
    >
      <h1 className="text-xl font-bold text-gray-900">Edit Product</h1>

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
          Failed to update product: {mutationError?.message}
        </p>
      )}

      <div className="flex gap-2">
        <input
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer rounded-md bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
          value={isPending ? "Saving..." : "Save Changes"}
        />
        <Link
          to={`/products/${id}`}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default EditProduct;
