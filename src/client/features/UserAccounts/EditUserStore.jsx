import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "./authSlice";
import { useState } from "react";

const EditUserStore = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

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
          <h3>Edit Store stuff here</h3>
          <form className="edit-form">
            <label className="form-labels">Product Name: </label>
            <input
              className="form-inputs"
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
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
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {/* <label className="form-labels">Category: </label> */}
            {/* <input type=DROPDOWN? /> */}
            <button type="submit">Add Product</button>
          </form>
          <button onClick={() => handleLogout()}>Log Out</button>
        </>
      )}
    </>
  );
};

export default EditUserStore;
