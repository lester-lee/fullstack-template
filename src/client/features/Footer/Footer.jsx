import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../UserAccounts/authSlice";
import { logout } from "../UserAccounts/authSlice";

import "./Footer.scss";

// Button for conditional LOG IN or LOG OUT
const Footer = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let text = token ? "Log Out" : "Log In";

  const clickAction = () => {
    if ((text = "Log Out")) {
      dispatch(logout());
    }
    if ((text = "Log In")) {
      navigate("/login");
    }
  };

  return (
    <footer className="footer">
      <button onClick={() => navigate("/")}>Home</button>
      <button
        onClick={() => {
          clickAction();
        }}
      >
        {text}
      </button>
    </footer>
  );
};

export default Footer;
