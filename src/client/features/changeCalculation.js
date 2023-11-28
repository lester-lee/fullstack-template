const changeCalculated = {
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
  changeCalculated.twenties = Math.floor(value / 20);
}

function calculateTens(value) {
  changeCalculated.tens = Math.floor(value / 10);
}

function calculateFives(value) {
  changeCalculated.fives = Math.floor(value / 5);
}

function calculateSingles(value) {
  changeCalculated.singles = Math.floor(value / 1);
}

function calculateQuarters(value) {
  changeCalculated.quarters = Math.floor(value / 0.25);
}

function calculateDimes(value) {
  changeCalculated.dimes = Math.floor(value / 0.1);
}

function calculateNickels(value) {
  changeCalculated.nickels = Math.floor(value / 0.05);
}

function calculatePennies(value) {
  changeCalculated.pennies = Math.floor(value / 0.01);
}

function calculateChange(value) {
  if (value >= 20) {
    calculateTwenties(value);
    value -= changeCalculated.twenties * 20;
    value = value.toFixed(2);
  }

  if (value >= 10) {
    calculateTens(value);
    value -= changeCalculated.tens * 10;
    value = value.toFixed(2);
  }

  if (value >= 5) {
    calculateFives(value);
    value -= changeCalculated.fives * 5;
    value = value.toFixed(2);
  }

  if (value >= 1) {
    calculateSingles(value);
    value -= changeCalculated.singles * 1;
    value = value.toFixed(2);
  }

  if (value >= 0.25) {
    calculateQuarters(value);
    value -= changeCalculated.quarters * 0.25;
    value = value.toFixed(2);
  }

  if (value >= 0.1) {
    calculateDimes(value);
    value -= changeCalculated.dimes * 0.1;
    value = value.toFixed(2);
  }

  if (value >= 0.05) {
    calculateNickels(value);
    value -= changeCalculated.nickels * 0.05;
    value = value.toFixed(2);
  }
  if (value > 0) {
    calculatePennies(value);
    value -= changeCalculated.pennies * 0.01;
  }
  return changeCalculated;
}

module.exports = calculateChange;
