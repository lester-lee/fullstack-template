import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../CashRegister/productsSlice";
import EditProduct from "./EditItemForm";

const ProductDetails= () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductQuery(id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div>
        <h2>
          Product: {product.name}
        </h2>
        <p>Price: {product.price}</p>
        <img src={product.imgUrl} />
        <p>Category: {product.category}</p>
      </div>
      <EditProduct id={product.id} />
    </>
  );
}

export default ProductDetails;