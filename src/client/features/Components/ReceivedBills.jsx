//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

// next button

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTotalReceived } from "../Slices/cartSlice";
import Totalbar from "../../layout/Totals_Navbar";

export default function ReceivedBills() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="totalbar">
      <Totalbar />
      </div>
      <h1>Received Bills page</h1>
      <button onClick={() => dispatch(addTotalReceived({ value: 20 }))}>
        20
      </button>
      <br />
      <button onClick={() => dispatch(addTotalReceived({ value: 10 }))}>
        10
      </button>
      <br />
      <button onClick={() => dispatch(addTotalReceived({ value: 5 }))}>
        5
      </button>
      <br />
      <button onClick={() => dispatch(addTotalReceived({ value: 1 }))}>
        1
      </button>
      <br />
      <button onClick={() => navigate("/received-coins")}>Next</button>
    </>
  );
}
