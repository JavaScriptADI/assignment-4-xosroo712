function isEven(number) {
  number = Math.abs(number);
  if (number === 0) {
    
    return true;
  }
  else if (number === 1) {
    return false;
  }
 
  else {
    return isEven(number - 2);
  }
}
console.log(isEven(50)); // Output: true (50 is even)
console.log(isEven(75)); // Output: false (75 is odd)
console.log(isEven(-1)); // Output: false (handled negative number)

