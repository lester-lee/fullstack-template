import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const calculatedChange = {
  twenties: 2,
  tens: 3,
  fives: 1,
  singles: 0,
  quarters: 2,
  dimes: 0,
  nickels: 4,
  pennies: 0,
};

export default function CalculatedChangeRender() {
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
      <p>{renderedKey}</p>
      <p>{renderedValue}</p>
      <button onClick={handleClick}>Next</button>
      <button onClick={() => navigate("/total-change")}>
        View total change
      </button>
    </>
  );
}
