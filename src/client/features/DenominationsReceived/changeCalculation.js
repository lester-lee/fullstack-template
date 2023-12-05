
  
const calculateChange = (value) => {
  // object used to render change amounts
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

  // cycle through value, and determine bills needed, large to small

  //If value is greater than bill denomination, we know that bill will be used. Divide value by bill-value to determine qty of bill used.

  //Then reduce the value by (qty * bill-value), to then look for the next denomination

  if (value >= 20) {
    calculatedChange.Twenties = Math.floor(value / 20);
    value -= calculatedChange.Twenties * 20;
    value = value.toFixed(2);
  }

  if (value >= 10) {
    calculatedChange.Tens = Math.floor(value / 10);
    value -= calculatedChange.Tens * 10;
    value = value.toFixed(2);
  }

  if (value >= 5) {
    calculatedChange.Fives = Math.floor(value / 5);
    value -= calculatedChange.Fives * 5;
    value = value.toFixed(2);
  }

  if (value >= 1) {
    calculatedChange.Singles = Math.floor(value / 1);
    value -= calculatedChange.Singles * 1;
    value = value.toFixed(2);
  }

  if (value >= 0.25) {
    calculatedChange.Quarters = Math.floor(value / 0.25);
    value -= calculatedChange.Quarters * 0.25;
    value = value.toFixed(2);
  }

  if (value >= 0.1) {
    calculatedChange.Dimes = Math.floor(value / 0.1);
    value -= calculatedChange.Dimes * 0.1;
    value = value.toFixed(2);
  }

  if (value >= 0.05) {
    calculatedChange.Nickels = Math.floor(value / 0.05);
    value -= calculatedChange.Nickels * 0.05;
    value = value.toFixed(2);
  }
  if (value > 0) {
    calculatedChange.Pennies = Math.floor(value / 0.01);
    value -= calculatedChange.Pennies * 0.01;
  }
  return calculatedChange;
}

export default calculateChange;