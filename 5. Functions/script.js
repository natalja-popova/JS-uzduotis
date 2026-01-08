// For numbers 1 through 100:
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// Otherwise, print the number.

const fizzBuzz = (num) => {
  if (num < 1 || num > 100) {
    console.log(num);
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  }
};

fizzBuzz(10);

///---------------------------------------------
let totalSum = 0;

const makeDoanation = (sum) => {
  totalSum = totalSum + sum;

  return "Total doanation at the moment is:" + totalSum;
  // or
  //return `Total doanation at the moment is: ${totalSum}`;
};

console.log(makeDoanation(20));
console.log(makeDoanation(20));

const getIsNumberPrime = (num) => {
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = Math.round(num / 2); i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.time("performance");
const result = getIsNumberPrime(3);
console.timeEnd("performance");

console.log(result);
