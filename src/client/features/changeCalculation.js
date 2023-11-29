const calculatedChange = {
  twenties: 0,
  tens: 0,
  fives: 0,
  singles: 0,
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0,
};

function calculateTwenties(value) {
  calculatedChange.twenties = Math.floor(value / 20);
}

function calculateTens(value) {
  calculatedChange.tens = Math.floor(value / 10);
}

function calculateFives(value) {
  calculatedChange.fives = Math.floor(value / 5);
}

function calculateSingles(value) {
  calculatedChange.singles = Math.floor(value / 1);
}

function calculateQuarters(value) {
  calculatedChange.quarters = Math.floor(value / 0.25);
}

function calculateDimes(value) {
  calculatedChange.dimes = Math.floor(value / 0.1);
}

function calculateNickels(value) {
  calculatedChange.nickels = Math.floor(value / 0.05);
}

function calculatePennies(value) {
  calculatedChange.pennies = Math.floor(value / 0.01);
}

export default function calculateChange(value) {
  if (value >= 20) {
    calculateTwenties(value);
    value -= calculatedChange.twenties * 20;
    value = value.toFixed(2);
  }

  if (value >= 10) {
    calculateTens(value);
    value -= calculatedChange.tens * 10;
    value = value.toFixed(2);
  }

  if (value >= 5) {
    calculateFives(value);
    value -= calculatedChange.fives * 5;
    value = value.toFixed(2);
  }

  if (value >= 1) {
    calculateSingles(value);
    value -= calculatedChange.singles * 1;
    value = value.toFixed(2);
  }

  if (value >= 0.25) {
    calculateQuarters(value);
    value -= calculatedChange.quarters * 0.25;
    value = value.toFixed(2);
  }

  if (value >= 0.1) {
    calculateDimes(value);
    value -= calculatedChange.dimes * 0.1;
    value = value.toFixed(2);
  }

  if (value >= 0.05) {
    calculateNickels(value);
    value -= calculatedChange.nickels * 0.05;
    value = value.toFixed(2);
  }
  if (value > 0) {
    calculatePennies(value);
    value -= calculatedChange.pennies * 0.01;
  }
  return calculatedChange;
}
