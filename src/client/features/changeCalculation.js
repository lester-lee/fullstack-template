// divisbile by 20? How many times (x)?
//value -= 20x
//return x

const changeCalculated = {
  twenties: 0,
  tens: 0,
  fives: 0,
  singles: 0,
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

function calculateQuarters(value) {}

function calculateDimes(value) {}

function calculateNickels(value) {}

function calculatePennies(value) {}

function calculateChange(value) {
  // target: return an object with values for each denomination
  if (value >= 20) {
    calculateTwenties(value);
    value -= changeCalculated.twenties * 20;
  }

  if (value >= 10) {
    calculateTens(value);
    value -= changeCalculated.tens * 10;
  }

  if (value >= 5) {
    calculateFives(value);
    value -= changeCalculated.fives * 5;
  }

  if (value >= 1) {
    calculateSingles(value);
    value -= changeCalculated.singles * 1;
  }
  console.log("remaining: ", value);
  console.log(changeCalculated);
}

calculateChange(58.25);
