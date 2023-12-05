import React from "react";
import { useSelector } from "react-redux";

const Totalbar = () => {
  const { totalPrice, totalReceived } = useSelector((state) => state.cart);
  return (
    <>
      <div>
        <h1>Total Received: ${totalReceived.toFixed(2)}</h1>
      </div>
      <div>
        <h1>Total Due: ${totalPrice.toFixed(2)}</h1>
      </div>
    </>
  );
}

export default Totalbar;