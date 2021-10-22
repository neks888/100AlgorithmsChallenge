function avoidObstacles(inputArray) {
  inputArray = inputArray.sort((a, b) => a - b);
  console.log(inputArray);

  largestArrayVal = inputArray[inputArray.length - 1];
  console.log(largestArrayVal);

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every(element => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

/* 
let i = 1
let i = 0 would cause infinite loop due to %
*/
