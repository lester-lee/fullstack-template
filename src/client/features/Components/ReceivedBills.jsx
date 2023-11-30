//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

// next button
import "../../../images/images.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTotalReceived } from "../slices/cartSlice";

export default function ReceivedBills() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>Received Bills page</h1>
      <img
        src="src/images/hundred-dollar-bill.jpeg"
        alt="hundred-dollar-bill"
        className="bills"
        onClick={() => dispatch(addTotalReceived({ value: 100 }))}
      />
      <br />
      <img
        src="src/images/fifty-dollar-bill.jpeg"
        alt="fifty-dollar-bill"
        className="bills"
        onClick={() => dispatch(addTotalReceived({ value: 50 }))}
      />
      <br />
      <img
        src="src/images/twenty-dollar-bill.jpeg"
        alt="twenty-dollar-bill"
        className="bills"
        onClick={() => dispatch(addTotalReceived({ value: 20 }))}
      />
      <br />
      <img
        src="src/images/ten-dollar-bill.jpg"
        alt="ten-dollar-bill"
        className="bills"
        onClick={() => dispatch(addTotalReceived({ value: 10 }))}
      />
      <br />
      <img
        src="src/images/five-dollar-bill.jpg"
        alt="five-dollar-bill"
        className="bills"
        onClick={() => dispatch(addTotalReceived({ value: 5 }))}
      />
      <br />
      <img
        src="src/images/one-dollar-bill.jpg"
        alt="one-dollar-bill"
        className="bills"
        onClick={() => dispatch(addTotalReceived({ value: 1 }))}
      />
      <br />
      <button onClick={() => navigate("/received-coins")}>Next</button>
    </>
  );
}
