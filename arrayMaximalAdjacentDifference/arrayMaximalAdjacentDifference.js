function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDifference = Math.abs(inputArray[i - 1] - inputArray[i]);
    console.log(absoluteDifference);
    maxDifference =
      absoluteDifference > maxDifference ? absoluteDifference : maxDifference;
    console.log(maxDifference);
  }
  return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
