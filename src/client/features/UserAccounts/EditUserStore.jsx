import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "./authSlice";

const EditUserStore = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <form>{/*  */}</form>
          <button onClick={() => handleLogout()}>Log Out</button>
        </>
      )}
    </>
  );
};

export default EditUserStore;
