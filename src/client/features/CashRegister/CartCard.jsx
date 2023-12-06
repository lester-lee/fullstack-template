import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
import "./CartCard.scss";

const CartCard = ({ product }) => {
  const { id, name, price, quantity } = product;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart-card">
    <li className="cart-item">
      <button className="delete-button" onClick={() => handleRemoveFromCart(product)}> - </button>
      <h3>{name}</h3>
      <p>x {quantity}</p>
      <p className="item-price">${price}</p>
    </li>
    </div>
  );
};

export default CartCard;
