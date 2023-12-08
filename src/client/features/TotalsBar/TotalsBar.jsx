import React from "react";
import { useSelector } from "react-redux";
import "./TotalsBar.scss";

const Totalbar = () => {
  const { totalPrice, totalReceived, changeToGive } = useSelector(
    (state) => state.cart
  );
  return (
    <>
      <div className="totalsBar">
        <div>
          <h1>Total Received: ${totalReceived.toFixed(2)}</h1>
        </div>
        <div>
          <h1>Total Due: ${totalPrice.toFixed(2)}</h1>
        </div>
      </div>
    </>
  );
};

export default Totalbar;
