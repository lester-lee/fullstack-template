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
  console.log("value @ Twenties: ", value);
}

function calculateTens(value) {
  changeCalculated.tens = Math.floor(value / 10);
  console.log("value @ tens: ", value);
}

function calculateFives(value) {
  changeCalculated.fives = Math.floor(value / 5);
  console.log("value @ fives: ", value);
}

function calculateSingles(value) {
  changeCalculated.singles = Math.floor(value / 1);
  console.log("value @ singles: ", value);
}

function calculateQuarters(value) {
  changeCalculated.quarters = Math.floor(value / 0.25);
  console.log("value @ quarters: ", value);
}

function calculateDimes(value) {
  changeCalculated.dimes = Math.floor(value / 0.1);
  console.log("value @ dimes: ", value);
}

function calculateNickels(value) {
  changeCalculated.nickels = Math.floor(value / 0.05);
  console.log("value @ nickels: ", value);
}

function calculatePennies(value) {
  changeCalculated.pennies = Math.floor(value / 0.01);
  console.log("value @ pennies: ", value);
}

function calculateChange(value) {
  if (value >= 20) {
    calculateTwenties(value);
    value -= changeCalculated.twenties * 20;
    value = value.toFixed(2);
    console.log("value after twenties: ", value);
  }

  if (value >= 10) {
    calculateTens(value);
    value -= changeCalculated.tens * 10;
    value = value.toFixed(2);
    console.log("value after tens: ", value);
  }

  if (value >= 5) {
    calculateFives(value);
    value -= changeCalculated.fives * 5;
    value = value.toFixed(2);
    console.log("value after fives: ", value);
  }

  if (value >= 1) {
    calculateSingles(value);
    value -= changeCalculated.singles * 1;
    value = value.toFixed(2);
    console.log("value after singles: ", value);
  }

  if (value >= 0.25) {
    calculateQuarters(value);
    value -= changeCalculated.quarters * 0.25;
    value = value.toFixed(2);
    console.log("value after quarters: ", value);
  }

  if (value >= 0.1) {
    calculateDimes(value);
    value -= changeCalculated.dimes * 0.1;
    value = value.toFixed(2);
    console.log("value after dimes: ", value);
  }

  if (value >= 0.05) {
    calculateNickels(value);
    value -= changeCalculated.nickels * 0.05;
    value = value.toFixed(2);
    console.log("value after nickels: ", value);
  }
  if (value > 0) {
    calculatePennies(value);
    value -= changeCalculated.pennies * 0.01;
  }

  console.log("remaining: ", value);
  console.log(changeCalculated);
}

calculateChange(876.76);
