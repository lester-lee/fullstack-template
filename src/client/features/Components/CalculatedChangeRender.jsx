import react, { useState, useEffect } from "react";

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
  const [index, setIndex] = useState(0);

  let renderedValue = null;
  let renderedKey = null;

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

  const handleClick = () => {
    setIndex((index += 1));
  };

  renderedValue = valueQueue[index];
  renderedKey = keys[valueIndeces[index]];

  return (
    <>
      <p>This is rendering</p>
      <p>{renderedKey}</p>
      <p>{renderedValue}</p>
      <button onClick={handleClick}>Next</button>
    </>
  );
}
