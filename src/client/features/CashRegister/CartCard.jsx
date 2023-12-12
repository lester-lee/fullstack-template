import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
import "./CartCard.scss";

const CartCard = ({ product }) => {
  const { name, price, quantity } = product;

  const dispatch = useDispatch();

  // Create handler to remove item from the cart
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart-card">
      <li className="cart-item">
        <button
          className="delete-button"
          onClick={() => handleRemoveFromCart(product)}
        >
          {" "}
          -{" "}
        </button>
        <h4>{name}</h4>
        <p>x {quantity}</p>
        <p className="item-price">${price.toFixed(2)}</p>
      </li>
    </div>
  );
};

export default CartCard;
