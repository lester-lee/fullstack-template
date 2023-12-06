import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, imgUrl } = product;
  const dispatch = useDispatch();

  // Create handler to add products to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <li className="product" onClick={() => handleAddToCart(product)}>
      <img src={imgUrl} />
      <h3 className="product-name">{name}</h3>
    </li>
  );
};

export default ProductCard;
