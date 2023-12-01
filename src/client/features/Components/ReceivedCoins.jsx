//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

//take the total value - total cost, and then put remainder into changeCalculation.js (puts change into an object split by $$ denominations)
//after than, we're getting an object that says  twenties: 2, tens: 0 etc....

// next button to CalculatedChangeRender.jsx

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTotalReceived,
  subtractTotalReceived,
  addCalculatedChange,
} from "../slices/cartSlice";
import { useState } from "react";

import calculateChange from "../changeCalculation";
import "../../../images/images.css";
import Totalbar from "../../layout/Totals_Navbar";

export default function ReceivedCoins() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dollarCoins, setDollarCoins] = useState(0);
  const [quarters, setQuarters] = useState(0);
  const [dimes, setDimes] = useState(0);
  const [nickels, setNickels] = useState(0);
  const [pennies, setPennies] = useState(0);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalReceived = useSelector((state) => state.cart.totalReceived);

  const changeToGive = totalReceived - totalPrice;

  console.log("change to give: ", changeToGive);

  const handleClick = () => {
    const result = calculateChange(changeToGive);
    dispatch(addCalculatedChange({ changeObject: result }));
    navigate("/change");
  };
  return (
    <>
      <div className="totalbar">
        <Totalbar />
      </div>
      <h1>Received Coins page</h1>
      {/* dollar coins */}
      <img
        src="src/images/dollar-coin.jpeg"
        alt="dollar-coin"
        className="coins dollar-coin"
        onClick={() => {
          dispatch(addTotalReceived({ value: 1 }));
          setDollarCoins(dollarCoins + 1);
        }}
      />
      {dollarCoins > 0 ? (
        <>
          <p>x {dollarCoins}</p>
          <button
            className="minus-button"
            onClick={() => {
              setDollarCoins(dollarCoins - 1);
              dispatch(subtractTotalReceived({ value: 1 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* quarters */}
      <img
        src="src/images/quarter.jpeg"
        alt="quarter"
        className="coins quarter"
        onClick={() => {
          dispatch(addTotalReceived({ value: 0.25 }));
          setQuarters(quarters + 1);
        }}
      />
      {quarters > 0 ? (
        <>
          <p>x {quarters}</p>
          <button
            className="minus-button"
            onClick={() => {
              setQuarters(quarters - 1);
              dispatch(subtractTotalReceived({ value: 0.25 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* dimes */}
      <img
        src="src/images/dime.jpeg"
        alt="dime"
        className="coins dime"
        onClick={() => {
          dispatch(addTotalReceived({ value: 0.1 }));
          setDimes(dimes + 1);
        }}
      />
      {dimes > 0 ? (
        <>
          <p>x {dimes}</p>
          <button
            className="minus-button"
            onClick={() => {
              setDimes(dimes - 1);
              dispatch(subtractTotalReceived({ value: 0.1 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* nickels */}
      <img
        src="src/images/nickel.jpeg"
        alt="nickel"
        className="coins nickel"
        onClick={() => {
          dispatch(addTotalReceived({ value: 0.05 }));
          setNickels(nickels + 1);
        }}
      />
      {nickels > 0 ? (
        <>
          <p>x {nickels}</p>
          <button
            className="minus-button"
            onClick={() => {
              setNickels(nickels - 1);
              dispatch(subtractTotalReceived({ value: 0.05 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* pennies */}
      <img
        src="src/images/penny.jpeg"
        alt="penny"
        className="coins penny"
        onClick={() => {
          dispatch(addTotalReceived({ value: 0.01 }));
          setPennies(pennies + 1);
        }}
      />
      {pennies > 0 ? (
        <>
          <p>x {pennies}</p>
          <button
            className="minus-button"
            onClick={() => {
              setPennies(pennies - 1);
              dispatch(subtractTotalReceived({ value: 0.01 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      <button onClick={handleClick}>Next</button>
    </>
  );
}
