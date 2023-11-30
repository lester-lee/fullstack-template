//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

// next button
import "../../../images/images.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTotalReceived, subtractTotalReceived } from "../slices/cartSlice";
import { useState } from "react";
import Totalbar from "../../layout/Totals_Navbar";

export default function ReceivedBills() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hundreds, setHundreds] = useState(0);
  const [fifties, setFifties] = useState(0);
  const [twenties, setTwenties] = useState(0);
  const [tens, setTens] = useState(0);
  const [fives, setFives] = useState(0);
  const [ones, setOnes] = useState(0);

  return (
    <>
      <div className="totalbar">
      <Totalbar />
      </div>
      <h1>Received Bills page</h1>
      {/* hundreds */}
      <img
        src="src/images/hundred-dollar-bill.jpeg"
        alt="hundred-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 100 }));
          setHundreds(hundreds + 1);
        }}
      />
      {hundreds > 0 ? (
        <>
          <p>x {hundreds}</p>
          <button
            className="minus-button"
            onClick={() => {
              setHundreds(hundreds - 1);
              dispatch(subtractTotalReceived({ value: 100 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* fifties */}
      <img
        src="src/images/fifty-dollar-bill.jpeg"
        alt="fifty-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 50 }));
          setFifties(fifties + 1);
        }}
      />
      {fifties > 0 ? (
        <>
          <p>x {fifties}</p>
          <button
            className="minus-button"
            onClick={() => {
              setFifties(fifties - 1);
              dispatch(subtractTotalReceived({ value: 50 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* twenties */}
      <img
        src="src/images/twenty-dollar-bill.jpeg"
        alt="twenty-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 20 }));
          setTwenties(twenties + 1);
        }}
      />
      {twenties > 0 ? (
        <>
          <p>x {twenties}</p>
          <button
            className="minus-button"
            onClick={() => {
              setTwenties(twenties - 1);
              dispatch(subtractTotalReceived({ value: 20 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* tens */}
      <img
        src="src/images/ten-dollar-bill.jpg"
        alt="ten-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 10 }));
          setTens(tens + 1);
        }}
      />
      {tens > 0 ? (
        <>
          <p>x {tens}</p>
          <button
            className="minus-button"
            onClick={() => {
              setTens(tens - 1);
              dispatch(subtractTotalReceived({ value: 10 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* fives */}
      <img
        src="src/images/five-dollar-bill.jpg"
        alt="five-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 5 }));
          setFives(fives + 1);
        }}
      />
      {fives > 0 ? (
        <>
          <p>x {fives}</p>
          <button
            className="minus-button"
            onClick={() => {
              setFives(fives - 1);
              dispatch(subtractTotalReceived({ value: 5 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      {/* singles */}
      <img
        src="src/images/one-dollar-bill.jpg"
        alt="one-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 1 }));
          setOnes(ones + 1);
        }}
      />
      {ones > 0 ? (
        <>
          <p>x {ones}</p>
          <button
            className="minus-button"
            onClick={() => {
              setOnes(ones - 1);
              dispatch(subtractTotalReceived({ value: 1 }));
            }}
          >
            -
          </button>
        </>
      ) : null}
      <br />
      <button onClick={() => navigate("/received-coins")}>Next</button>
    </>
  );
}
