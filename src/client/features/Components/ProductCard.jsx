import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/cartSlice";

const ProductCard = ({ product }) => {
  const { name, imgUrl } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <li className="product" onClick={() => handleAddToCart(product)}>
      <img src={imgUrl} />
      <h3>{name}</h3>
    </li>
  );
};

export default ProductCard;
