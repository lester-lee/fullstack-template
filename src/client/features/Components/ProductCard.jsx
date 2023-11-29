import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Slices/cartSlice";

const ProductCard = ({ product }) => {
  const { id, name, price } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Needs to be moved to CartCard
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <li className="product" onClick={() => handleAddToCart(product)}>
      <h3>{name}</h3>
      <p>{price}</p>
    </li>
  );
};

export default ProductCard;
