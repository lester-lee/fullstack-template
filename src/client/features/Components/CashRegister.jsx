import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Popup from "./Popup";

const CashRegister = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const navigate = useNavigate();

  const total = useSelector((state) => state.cart.totalPrice);
  console.log("total", total);

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart items", cartItems);
  //useState and useEffect for Popup function
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);
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
      <button onClick={() => navigate("/received-bills")}>Checkout</button>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1>Greet the customer:</h1>
        <p>Hello, what would you like today?</p>
      </Popup>
    </div>
  );
};

export default CashRegister;
