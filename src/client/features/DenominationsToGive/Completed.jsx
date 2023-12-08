import { useNavigate } from "react-router-dom";
import { resetCart } from "../CashRegister/cartSlice";
import { useDispatch } from "react-redux";
import "./Completed.scss";

const Completed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetCart());
    navigate("/");
  };

  return (
    <>
      <div className="message">
        <h1 className="finished_h1">Finished!</h1>
        <h2 className="finished_h2">
          Tell the customer: <br /> Have a great day!
        </h2>
        <button onClick={() => navigate("/total-change")}>Back</button>
        <button className="done" onClick={handleClick}>
          Done
        </button>
      </div>
    </>
  );
};

export default Completed;
