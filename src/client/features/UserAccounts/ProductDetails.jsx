import { useParams, useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../CashRegister/productsSlice";
import EditProduct from "./EditItemForm";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useGetProductQuery(id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <body>
      <h1 className="heading">Edit Item</h1>
      <h2>{product.name}</h2>
      <section className="edit-product-container">
        <section className="edit-form-component">
          <EditProduct id={product.id} />
        </section>
        <section>
          <img className="product-details-img" src={product.imgUrl} />
          <div className="description">
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
          </div>
        </section>
      </section>
      <footer>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/edit")}>Back to Inventory</button>
      </footer>
    </body>
  );
};

export default ProductDetails;
