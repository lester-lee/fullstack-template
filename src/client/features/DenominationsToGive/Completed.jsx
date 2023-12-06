import { useNavigate } from "react-router-dom";
import { resetCart } from "../CashRegister/cartSlice";
import { useDispatch } from "react-redux";

const Completed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetCart());
    navigate("/");
  };

  return (
    <>
      <h1 className="finished_h1">Finished!</h1>
      <h2 className="finished_h2">Tell the customer: Have a great day!</h2>
      <button className="done" onClick={handleClick}>
        Done
      </button>
    </>
  );
};

export default Completed;
