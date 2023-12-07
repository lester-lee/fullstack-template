import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "./authSlice";
import { useState } from "react";
import { useAddProductMutation } from "../CashRegister/productsSlice";
import { useGetStoreDetailsQuery } from "./authSlice";

const EditUserStore = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");

  const [addProduct] = useAddProductMutation();
  const { data, isLoading, isError } = useGetStoreDetailsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error occured while fetching data</p>;

  if (!data) return <p>No data available</p>;

  const storeId = data.id;
  const username = data.username;

  const product = { name, price, imgUrl, category, storeId };
  // console.log("product: ", product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct(product);
  };

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <>
      <h1>Welcome to your Store, {username}</h1>
      {!token ? (
        <>
          <p>You must be logged in to edit a store</p>
          <button onClick={() => navigate("/login")}>Log In</button>
          <button onClick={() => navigate("/products")}>Cash Register</button>
        </>
      ) : (
        <>
          <h2>Add Product</h2>
          <form className="edit-form">
            <label className="form-labels">Product Name: </label>
            <input
              className="form-inputs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-labels">Price: </label>
            <input
              className="form-inputs"
              type="number"
              min="0"
              step=".01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="form-labels">Image Url: </label>
            <input
              className="form-inputs"
              type="text"
              // type="file"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <label className="form-labels">Category: </label>
            <input
              className="form-inputs"
              type="text"
              // type="file"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Add Product
            </button>
          </form>
          <button onClick={() => handleLogout()}>Log Out</button>
        </>
      )}
    </>
  );
};

export default EditUserStore;
