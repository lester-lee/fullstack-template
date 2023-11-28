import { useState } from "react";

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

function calculatedChangeRender() {
  const [renderedKey, setRenderedKey] = useState("");
  const [renderedValue, setRenderedValue] = useState("");
  const [paused, setPaused] = useState(false);

  for (const key in calculatedChange) {
    const value = calculatedChange[key];
    console.log(key, value);
    if (value > 0 && !paused) {
      setRenderedKey(key);
      setRenderedValue(calculatedChange[key]);
      setPaused(true);
    }
  }

  return (
    <>
      <p>{renderedKey}</p>
      <p>{renderedValue}</p>
      <button onClick={() => setPaused(false)}>Next</button>
    </>
  );
}

calculatedChangeRender();
