//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

//take the total value - total cost, and then put remainder into changeCalculation.js (puts change into an object split by $$ denominations)
//after than, we're getting an object that says  twenties: 2, tens: 0 etc....

// next button to CalculatedChangeRender.jsx

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTotalReceived } from "../slices/cartSlice";

export default function ReceivedCoins() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>Received Coins page</h1>
      <button onClick={() => dispatch(addTotalReceived({ value: 0.25 }))}>
        .25
      </button>
      <br />
      <button onClick={() => dispatch(addTotalReceived({ value: 0.1 }))}>
        .10
      </button>
      <br />
      <button onClick={() => dispatch(addTotalReceived({ value: 0.05 }))}>
        .05
      </button>
      <br />
      <button onClick={() => dispatch(addTotalReceived({ value: 0.01 }))}>
        .01
      </button>
      <br />
      <button onClick={() => navigate("/change")}>Next</button>
    </>
  );
}
