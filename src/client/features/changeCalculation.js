const calculateChange = (value) => {
  const calculatedChange = {
    Twenties: 0,
    Tens: 0,
    Fives: 0,
    Singles: 0,
    Quarters: 0,
    Dimes: 0,
    Nickels: 0,
    Pennies: 0,
  };

  function calculateTwenties(value) {
    calculatedChange.Twenties = Math.floor(value / 20);
  }

  function calculateTens(value) {
    calculatedChange.Tens = Math.floor(value / 10);
  }

  function calculateFives(value) {
    calculatedChange.Fives = Math.floor(value / 5);
  }

  function calculateSingles(value) {
    calculatedChange.Singles = Math.floor(value / 1);
  }

  function calculateQuarters(value) {
    calculatedChange.Quarters = Math.floor(value / 0.25);
  }

  function calculateDimes(value) {
    calculatedChange.Dimes = Math.floor(value / 0.1);
  }

  function calculateNickels(value) {
    calculatedChange.Nickels = Math.floor(value / 0.05);
  }

  function calculatePennies(value) {
    calculatedChange.Pennies = Math.floor(value / 0.01);
  }

  if (value >= 20) {
    calculateTwenties(value);
    value -= calculatedChange.Twenties * 20;
    value = value.toFixed(2);
  }

  if (value >= 10) {
    calculateTens(value);
    value -= calculatedChange.Tens * 10;
    value = value.toFixed(2);
  }

  if (value >= 5) {
    calculateFives(value);
    value -= calculatedChange.Fives * 5;
    value = value.toFixed(2);
  }

  if (value >= 1) {
    calculateSingles(value);
    value -= calculatedChange.Singles * 1;
    value = value.toFixed(2);
  }

  if (value >= 0.25) {
    calculateQuarters(value);
    value -= calculatedChange.Quarters * 0.25;
    value = value.toFixed(2);
  }

  if (value >= 0.1) {
    calculateDimes(value);
    value -= calculatedChange.Dimes * 0.1;
    value = value.toFixed(2);
  }

  if (value >= 0.05) {
    calculateNickels(value);
    value -= calculatedChange.Nickels * 0.05;
    value = value.toFixed(2);
  }
  if (value > 0) {
    calculatePennies(value);
    value -= calculatedChange.Pennies * 0.01;
  }
  return calculatedChange;
}

export default calculateChange;