import type { Product } from "../types";

interface Props {
  /** Product list */
  data: Product;
  /** Handler for product added event */
  onAddToCart?: () => void;
}

function ProductCard({ data, onAddToCart }: Props) {
  return (
    <div className="flex max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-48 items-center justify-center bg-gray-50 p-4">
        <img
          src={data.image}
          alt={data.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium capitalize text-amber-700">
          {data.category}
        </span>

        <h2 className="text-lg font-semibold text-gray-900">{data.title}</h2>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-amber-600">
            ${data.price.toFixed(2)}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <span className="text-amber-500">&#9733;</span>
            {data.rating.rate} ({data.rating.count})
          </span>
        </div>

        {onAddToCart && (
          <button
            onClick={onAddToCart}
            className="mt-2 w-full cursor-pointer rounded-md bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
