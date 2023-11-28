import { useGetProductsQuery } from "../../store/productsSlice";

function ProductsCard() {
const { data, isLoading, isError } = useGetProductsQuery();

return (
    <div className="cashRegister">
      {isLoading && <p>Loading products...</p>}
      {data && (
        <ul>
          {data.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsCard;