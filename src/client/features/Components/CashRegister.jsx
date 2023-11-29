import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CashRegister = () => {
  const navigate = useNavigate();

  const total = useSelector((state) => state.cart.totalPrice);
  console.log("total", total);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h1>This is the cash register component</h1>
      <button onClick={() => navigate("/received-bills")}>Checkout</button>
      <div className="product-list">
        <div className="product-card"></div>
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default CashRegister;
