// forEach
const forEach = (array, instructionFunction) => {
  for (let i = 0; i < array.length; i += 1) {
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

  for (let i = 0; i < array.length; i += 1) {
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

console.log(doubleNumbers);

// filter
const filter = (array, instructionFunction) => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const matchingItem = instructionFunction(array[i], i, array);

    if (matchingItem === true) {
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

console.log(numbersGreaterThanTen);

// find
const find = (array, instructionFunction) => {
  for (let i = 0; i < array.length; i += 1) {
    const firstMatch = instructionFunction(array[i], i, array);

    if (firstMatch === true) {
      return array[i];
    }
  }
};

const cities = ["New York", "Hanoi", "Munich", "Helsinki"];

const cityWithH = (city) => {
  return city.startsWith("H") === true;
};

const firstCityWithH = find(cities, cityWithH);

console.log(firstCityWithH);

// Some
const some = (array, instructionFunction) => {
  for (let i = 0; i < array.length; i += 1) {
    const atLeastOneMatch = instructionFunction(array[i], i, array);

    if (atLeastOneMatch === true) {
      return true;
    }
  }

  return false;
};

const wildcats = ["Tiger", "Leopard", "Jaguar", "Lion", "Cougar"];

const findWildcatsWithL = (wildcat) => {
  return wildcat.startsWith("L") === true;
};

const wildcatsWithL = some(wildcats, findWildcatsWithL);

console.log(wildcatsWithL);

// every
const every = (array, instructionFunction) => {
  for (let i = 0; i < array.length; i += 1) {
    const passingItem = instructionFunction(array[i], i, array);

    if (passingItem === false) {
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

console.log(numbersGreaterThanEleven);

// reduce
const reduce = (array, instructionFunction, startingValue) => {
  let totalValue = startingValue;

  for (let i = 0; i < array.length; i += 1) {
    totalValue = instructionFunction(totalValue, array[i], i, array);
  }
  return totalValue;
};

const reduceNumbers = [8, 13, 18];

const addNumbers = (total, currentNumber) => {
  return total + currentNumber;
};

const reduceTotal = reduce(reduceNumbers, addNumbers, 0);

console.log(reduceTotal);