import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Totalbar from "../../layout/Totals_Navbar";

import "../../../images/images.css";

// dummyData - comment this to use store
// const calculatedChange = {
//   twenties: 2,
//   tens: 3,
//   fives: 1,
//   singles: 2,
//   quarters: 2,
//   dimes: 1,
//   nickels: 4,
//   pennies: 3,
// };

export default function CalculatedChangeRender() {
  // uncomment this to use store
  const calculatedChange = useSelector((state) => state.cart.calculatedChange);

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const keys = Object.keys(calculatedChange);
  const values = Object.values(calculatedChange);

  // puts all values > 0 in an array, and those associated indeces in another array
  const valueQueue = [];
  const valueIndeces = [];

  values.forEach((num, index) => {
    if (num > 0) {
      valueQueue.push(num);
      valueIndeces.push(index);
    }
  });

  let renderedKey = keys[valueIndeces[index]];
  let renderedValue = valueQueue[index];

  const handleClick = () => {
    if (index + 1 >= valueQueue.length) {
      // navigate to finish page?
      // or if index +1 > value.length, change button text to "Finish," and then navigate
    }
    setIndex(index + 1);
  };

  return (
    <>
    <div className="totalbar">
      <Totalbar />
      </div>
    
      <p>{renderedValue}</p>
      <p>{renderedKey}</p>
      {renderedKey === "twenties" ? (
        <img className="bills" src="src/images/twenty-dollar-bill.jpeg" />
      ) : null}
      {renderedKey === "tens" ? (
        <img className="bills" src="src/images/ten-dollar-bill.jpg" />
      ) : null}
      {renderedKey === "fives" ? (
        <img className="bills" src="src/images/five-dollar-bill.jpg" />
      ) : null}
      {renderedKey === "singles" ? (
        <img className="bills" src="src/images/one-dollar-bill.jpg" />
      ) : null}
      {renderedKey === "quarters" ? (
        <img className="coins quarter" src="src/images/quarter.jpeg" />
      ) : null}
      {renderedKey === "dimes" ? (
        <img className="coins dime" src="src/images/dime.jpeg" />
      ) : null}
      {renderedKey === "nickels" ? (
        <img className="coins nickel" src="src/images/Nickel.jpeg" />
      ) : null}
      {renderedKey === "pennies" ? (
        <img className="coins penny" src="src/images/penny.jpeg" />
      ) : null}

      <br />
      <button onClick={handleClick}>Next</button>
      <br />
      <button onClick={() => navigate("/total-change")}>
        View total change
      </button>
    </>
  );
}
