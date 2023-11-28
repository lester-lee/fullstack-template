import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Slices/cartSlice";

const CashRegister = () => {
  const total = useSelector((state) => state.cart.totalPrice);
  console.log("total", total);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return;
  <div>
    <div className="product-list">
      <div className="product-card"></div>
    </div>
    <div className="cart"></div>
  </div>;
};

export default CashRegister;
