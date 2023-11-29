//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

// next button

import { useNavigate } from "react-router-dom";

export default function ReceivedBills() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Received Bills page</h1>
      <button onClick={() => navigate("/received-coins")}>Next</button>
    </>
  );
}
