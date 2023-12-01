import { useDispatch } from "react-redux";
import { removeFromCart } from "../Slices/cartSlice";

const CartCard = ({ product }) => {
  const { id, name, price, quantity } = product;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <li className="cart-item">
      <h3>{name}</h3>
      <p>{quantity}</p>
      <p>${price}</p>
      <button onClick={() => handleRemoveFromCart(product)}>-</button>
    </li>
  );
};

export default CartCard;
