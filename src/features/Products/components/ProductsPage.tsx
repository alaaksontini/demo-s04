import useCartStore from "../../Cart/stores/CartStore";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { productKeys } from "../queryKeys";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";

function Products() {
  const addItem = useCartStore((state) => state.addItem);

  const { data, isLoading, error } = useQuery({
    queryKey: [productKeys.list],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // handle empty result
  if (!data) return <div>No products found.</div>;

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />
      <Link to={"/products/create"}>Ajouter Produit</Link>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((product: Product) => (
          <div>
            <ProductCard
              key={product.id}
              data={product}
              onAddToCart={() =>
                addItem({
                  id: String(product.id),
                  name: product.title,
                  price: product.price,
                  quantity: 1,
                })
              }
            />
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
