import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Totalbar from "../../layout/Totals_Navbar";
import DenominationCard from "./DenominationCard";

import "../../../images/images.css";

const CalculatedChangeRender = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  // let renderedDenomination = null;
  // let renderedValue = null;

  //gets calculatedChange object from redux store
  const calculatedChange = useSelector((state) => state.cart.calculatedChange);

  //puts all keys in an array
  // const keys = Object.keys(calculatedChange);

  // puts all values in another array
  // const values = Object.values(calculatedChange);

  // find values greater than 0, and puts them in valueQueue
  // puts the index of the value > 0 in valueIndeces array
  // const valueQueue = [];
  // const valueIndeces = [];

  // const determineChange = () => {
  //   values.forEach((num, index) => {
  //     if (num > 0) {
  //       valueQueue.push(num);
  //       valueIndeces.push(index);
  //     }
  //   });
  // };

  // determineChange();

  // let renderedKey = keys[valueIndeces[index]];
  // let renderedValue = valueQueue[index];

  // const handleClick = () => {
  //   if (index + 1 >= valueQueue.length) {
  //     // navigate to finish page?
  //     navigate("/total-change");
  //     // or if index +1 > value.length, change button text to "Finish," and then navigate
  //   }
  //   setIndex(index + 1);
  // };
  const renderingArray = [];
  const renderDenomination = () => {
    for (const denomination in calculatedChange) {
      let value = calculatedChange[denomination];
      if (value > 0) {
        // renderedDenomination = denomination;
        // renderedValue = value;
        renderingArray.push(denomination, value);
      }
    }
  };

  renderDenomination();

  let renderedDenomination = renderingArray[index];
  let renderedValue = renderingArray[index + 1];

  return (
    <>
      <div className="totalbar">
        <Totalbar />
      </div>
      <div>
        <DenominationCard
          denomination={renderedDenomination}
          value={renderedValue}
        />
      </div>
      {/* 
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
      ) : null} */}

      <br />
      {index + 2 < renderingArray.length ? (
        <button onClick={() => setIndex(index + 2)}>Next</button>
      ) : null}
      <br />
      <button onClick={() => navigate("/total-change")}>
        View total change
      </button>
    </>
  );
};

export default CalculatedChangeRender;

// brainstorm:
// cycle through object
// for key in calculatedChange
// while !paused
// if key[value?] > 0, render
// {key}, render{key[value]}
// set pause

// click sets pause to false
