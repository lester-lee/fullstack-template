import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "./authSlice";
import { useState } from "react";
import { useAddProductMutation } from "../CashRegister/productsSlice";

const EditUserStore = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  //get store id
  // add storeId to line19
  const product = { name, price, imgUrl, category };

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <>
      <h1>Edit Store</h1>
      {!token ? (
        <>
          <p>You must be logged in to edit a store</p>
          <button onClick={() => navigate("/login")}>Log In</button>
          <button onClick={() => navigate("/products")}>Cash Register</button>
        </>
      ) : (
        <>
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
            <button type="submit">Add Product</button>
          </form>
          <button onClick={() => handleLogout()}>Log Out</button>
        </>
      )}
    </>
  );
};

export default EditUserStore;
