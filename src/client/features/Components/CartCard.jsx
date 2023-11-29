import { useDispatch } from "react-redux";
import { removeFromCart } from "../Slices/cartSlice";

const CartCard = ({ product }) => {
  const { id, name, price, quantity } = product;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <li className="cart-item">
      <h3>{name}</h3>
      <p>{quantity}</p>
      <p>${price}</p>
      <button onClick={() => handleRemoveFromCart(id)}>-</button>
    </li>
  );
};

export default CartCard;
