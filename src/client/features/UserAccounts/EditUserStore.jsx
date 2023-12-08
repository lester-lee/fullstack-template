import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "./authSlice";
import { useState } from "react";
import { useAddProductMutation } from "../CashRegister/productsSlice";
import { useGetStoreDetailsQuery } from "./authSlice";
import { useGetProductsByStoreIdQuery } from "../CashRegister/productsSlice";
import { skipToken } from "@reduxjs/toolkit/query";

// page allows administrators to add and edit products in their store
const EditUserStore = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fields set in form
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");

  // allows POST to API to add products
  const [addProduct] = useAddProductMutation();
  // gets data from the store, specifically to retrieve username and storeId
  const { data, isLoading, isError } = useGetStoreDetailsQuery();
  const {
    data: storeData,
    isLoading: storeIsLoading,
    isError: storeIsError,
  } = useGetProductsByStoreIdQuery(data?.id ?? skipToken);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error occured while fetching data</p>;

  if (!data) return <p>No data available</p>;

  // storeId is auto-populated in the post request, ensuring that all products go to that admin's store
  const storeId = data.id;
  const username = data.username;

  if (storeIsLoading) return <p>Loading...</p>;
  if (storeIsError) return <p>Error occured while fetching store data</p>;
  if (!storeData) return <p>No data available</p>;

  const product = { name, price, imgUrl, category, storeId };

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
      {/* <p>{storeData.name}</p> */}
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
