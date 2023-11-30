//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

// next button
import "../../../images/images.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTotalReceived } from "../slices/cartSlice";
import { useState } from "react";

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
      <h1>Received Bills page</h1>
      <img
        src="src/images/hundred-dollar-bill.jpeg"
        alt="hundred-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 100 }));
          setHundreds(hundreds + 1);
        }}
      />
      {hundreds > 0 ? <p>x {hundreds}</p> : null}
      <br />
      <img
        src="src/images/fifty-dollar-bill.jpeg"
        alt="fifty-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 50 }));
          setFifties(fifties + 1);
        }}
      />
      {fifties > 0 ? <p>x {fifties}</p> : null}
      <br />
      <img
        src="src/images/twenty-dollar-bill.jpeg"
        alt="twenty-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 20 }));
          setTwenties(twenties + 1);
        }}
      />
      {twenties > 0 ? <p>x {twenties}</p> : null}
      <br />
      <img
        src="src/images/ten-dollar-bill.jpg"
        alt="ten-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 10 }));
          setTens(tens + 1);
        }}
      />
      {tens > 0 ? <p>x {tens}</p> : null}
      <br />
      <img
        src="src/images/five-dollar-bill.jpg"
        alt="five-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 5 }));
          setFives(fives + 1);
        }}
      />
      {fives > 0 ? <p>x {fives}</p> : null}
      <br />
      <img
        src="src/images/one-dollar-bill.jpg"
        alt="one-dollar-bill"
        className="bills"
        onClick={() => {
          dispatch(addTotalReceived({ value: 1 }));
          setOnes(ones + 1);
        }}
      />
      {ones > 0 ? <p>x {ones}</p> : null}
      <br />
      <button onClick={() => navigate("/received-coins")}>Next</button>
    </>
  );
}
