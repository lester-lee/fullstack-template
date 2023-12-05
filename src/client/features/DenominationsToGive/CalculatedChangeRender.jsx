import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Totalbar from "../TotalsBar/TotalsBar";

import "../../assets/images/images.scss";

const CalculatedChangeRender = () => {
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

  console.log("rendered Key", renderedKey);
  console.log("rendered value:", renderedValue);

  const handleClick = () => {
    if (index + 1 >= valueQueue.length) {
      // navigate to finish page?
      navigate("/total-change");
      // or if index +1 > value.length, change button text to "Finish," and then navigate
    }
    setIndex(index + 1);
  };

  return (
    <>
      <div className="totalbar">
        <Totalbar />
      </div>
    
      <p>{renderedKey}: </p>
      <p>{renderedValue}</p>

      {renderedKey === "Twenties" ? (
        <img className="bills" src="src/images/twenty-dollar-bill.jpeg" />
      ) : null}
      {renderedKey === "Tens" ? (
        <img className="bills" src="src/images/ten-dollar-bill.jpg" />
      ) : null}
      {renderedKey === "Fives" ? (
        <img className="bills" src="src/images/five-dollar-bill.jpg" />
      ) : null}
      {renderedKey === "Singles" ? (
        <img className="bills" src="src/images/one-dollar-bill.jpg" />
      ) : null}
      {renderedKey === "Quarters" ? (
        <img className="coins quarter" src="src/images/quarter.jpeg" />
      ) : null}
      {renderedKey === "Dimes" ? (
        <img className="coins dime" src="src/images/dime.jpeg" />
      ) : null}
      {renderedKey === "Nickels" ? (
        <img className="coins nickel" src="src/images/Nickel.jpeg" />
      ) : null}
      {renderedKey === "Pennies" ? (
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

export default CalculatedChangeRender;