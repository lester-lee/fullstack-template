import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/productsSlice";

const CashRegister = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const total = useSelector((state) => state.cart.totalPrice);
  console.log("total", total);

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart items", cartItems);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className="product-container">
        <ul className="product-list">
          {products.map((product) => {
            <ProductCard key={product.id} product={product} />;
          })}
        </ul>
      </div>
      <div className="cart">
        <ul className="cart-list">
          {cartItems.map((product) => {
            <CartCard key={product.id} item={product} />;
          })}
        </ul>
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
};

export default CashRegister;
