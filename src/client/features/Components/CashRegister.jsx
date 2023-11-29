import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/productsSlice";

const CashRegister = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const total = useSelector((state) => state.cart.totalPrice);
  console.log("total", total);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className="product-container">
        <ul className="product-list">
          {[...products].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default CashRegister;
