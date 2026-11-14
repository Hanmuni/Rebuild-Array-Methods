// Test function
const testResult = (actual, expected, testName) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Passed: ${testName}`);
  } else {
    console.log(`Failed: ${testName}`);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
  }
};

// forEach
const forEach = (array, instructionFunction) => {
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    instructionFunction(array[i], i, array);
  }
};

const forEachNumbers = [1, 5, 7];

const printNumbers = (number) => {
  console.log(number);
};

forEach(forEachNumbers, printNumbers);

// map
const map = (array, instructionFunction) => {
  const newArray = [];
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    const newItem = instructionFunction(array[i], i, array);
    newArray.push(newItem);
  }

  return newArray;
};

const mapNumbers = [2, 4, 6];

const multiplyByTwo = (number) => {
  return number * 2;
};

const doubleNumbers = map(mapNumbers, multiplyByTwo);

testResult(doubleNumbers, [4, 8, 12], "map should multiply all numbers by 2");

// filter
const filter = (array, instructionFunction) => {
  const newArray = [];
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    const matchingItem = instructionFunction(array[i], i, array);

    if (matchingItem) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const filterNumbers = [1, 5, 8, 13, 18, 24];

const isGreaterThanTen = (number) => {
  return number > 10;
};

const numbersGreaterThanTen = filter(filterNumbers, isGreaterThanTen);

testResult(
  numbersGreaterThanTen,
  [13, 18, 24],
  "filter returns a new array with only numbers greater than 10",
);

// find
const find = (array, instructionFunction) => {
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    const firstMatch = instructionFunction(array[i], i, array);

    if (firstMatch) {
      return array[i];
    }
  }
};

const cities = ["New York", "Hanoi", "Munich", "Helsinki"];

const cityWithH = (city) => {
  return city.startsWith("H");
};

const firstCityWithH = find(cities, cityWithH);

testResult(
  firstCityWithH,
  "Hanoi",
  "find returns Hanoi as the first City with H",
);

// Some
const some = (array, instructionFunction) => {
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    const atLeastOneMatch = instructionFunction(array[i], i, array);

    if (atLeastOneMatch) {
      return true;
    }
  }

  return false;
};

const wildcats = ["Tiger", "Leopard", "Jaguar", "Lion", "Cougar"];

const findWildcatsWithL = (wildcat) => {
  return wildcat.startsWith("L");
};

const wildcatsWithL = some(wildcats, findWildcatsWithL);

testResult(
  wildcatsWithL,
  true,
  "some returns true if any wildcat starts with L",
);

// every
const every = (array, instructionFunction) => {
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    const passingItem = instructionFunction(array[i], i, array);

    if (!passingItem) {
      return false;
    }
  }
  return true;
};

const everyNumbers = [13, 18, 28];

const isGreaterThanEleven = (number) => {
  return number > 11;
};

const numbersGreaterThanEleven = every(everyNumbers, isGreaterThanEleven);

testResult(
  numbersGreaterThanEleven,
  true,
  "Every returns true if all numbers are greater than eleven",
);

// reduce
const reduce = (array, instructionFunction, startingValue) => {
  let totalValue = startingValue;
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    if (!(i in array)) {
      continue;
    }

    if (totalValue === undefined) {
      totalValue = array[i];
    } else {
      totalValue = instructionFunction(totalValue, array[i], i, array);
    }
  }
  return totalValue;
};

const reduceNumbers = [8, 13, 18];

const addNumbers = (total, currentNumber) => {
  return total + currentNumber;
};

const reduceTotal = reduce(reduceNumbers, addNumbers);

testResult(reduceTotal, 39, "The total is 39");
