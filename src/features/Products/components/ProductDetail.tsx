import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../services/api";
import { Link, useParams } from "react-router";
import ProductCard from "./ProductCard";
import { productKeys } from "../queryKeys";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";

function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [productKeys.detail(Number(id))],
    queryFn: () => fetchProduct(Number(id)),
  });

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: data?.title },
        ]}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      Product card
      {data && (
        <div>
          <ProductCard data={data} />
          <Link to={`/products/${id}/edit`}>Modifier</Link>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
