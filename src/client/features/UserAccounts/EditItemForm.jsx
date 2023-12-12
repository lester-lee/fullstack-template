import { useState, useEffect } from "react";
import { useEditProductMutation, useGetProductQuery } from "../CashRegister/productsSlice";

const EditProduct = ({ id }) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [category, setCategory] = useState("");

    const [editItem] = useEditProductMutation();

    //to pull data to populate form fields
    const productQuery = useGetProductQuery(id);
    const productData = productQuery.data;

    useEffect(() => {
          // Set state variables with the fetched data
          if (productData) {
            setName(productData.name);
            setPrice(productData.price);
            setImgUrl(productData.imgUrl);
            setCategory(productData.category);
          } // Dependency array to re-run effect when ID changes
        }, [productData]);

    const product = {
        id,
        name,
        price,
        imgUrl,
        category
    };

  const update = async (evt) => {
    evt.preventDefault();
    editItem(product);
    console.log("product", product);
  };
  return (
    <section>
      <form onSubmit={update}>
        <label className="update-name">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </label>
        <label className="update-price">
          Price
          <input
            type="float"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          ></input>
        </label>
        <label className="update-imgUrl">
          Image Url:
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          ></input>
        </label>
        <label className="update-category">
          Category
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          ></input>
        </label>
        <button type="submit">Update Product</button>
      </form>
    </section>
  );
}

export default EditProduct;