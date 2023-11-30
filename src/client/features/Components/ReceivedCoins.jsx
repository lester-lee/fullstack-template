import Totalbar from "../../layout/Totals_Navbar";
//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

//take the total value - total cost, and then put remainder into changeCalculation.js (puts change into an object split by $$ denominations)
//after than, we're getting an object that says  twenties: 2, tens: 0 etc....

// next button to CalculatedChangeRender.jsx

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTotalReceived, addCalculatedChange } from "../slices/cartSlice";

import calculateChange from "../changeCalculation";
import "../../../images/images.css";

export default function ReceivedCoins() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalReceived = useSelector((state) => state.cart.totalReceived);

  const changeToGive = totalPrice - totalReceived;

  const handleClick = () => {
    const result = calculateChange(35.35);
    dispatch(addCalculatedChange({ changeObject: result }));
    navigate("/change");
  };
  return (
    <>
      <h1>Received Coins page</h1>
      <img
        src="src/images/dollar-coin.jpeg"
        alt="dollar-coin"
        className="coins dollar-coin"
        onClick={() => dispatch(addTotalReceived({ value: 1 }))}
      />
      <br />
      <img
        src="src/images/quarter.jpeg"
        alt="quarter"
        className="coins quarter"
        onClick={() => dispatch(addTotalReceived({ value: 0.25 }))}
      />
      <br />
      <img
        src="src/images/dime.jpeg"
        alt="dime"
        className="coins dime"
        onClick={() => dispatch(addTotalReceived({ value: 0.1 }))}
      />
      <br />
      <img
        src="src/images/nickel.jpeg"
        alt="nickel"
        className="coins nickel"
        onClick={() => dispatch(addTotalReceived({ value: 0.05 }))}
      />
      <br />
      <img
        src="src/images/penny.jpeg"
        alt="penny"
        className="coins penny"
        onClick={() => dispatch(addTotalReceived({ value: 0.01 }))}
      />
      <br />
      <button onClick={handleClick}>Next</button>
    </>
  );
}
