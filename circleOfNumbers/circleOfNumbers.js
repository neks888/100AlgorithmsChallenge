function circleOfNumbers(n, firstNumber) {
  const numArray = [];
  const halfwayPoint = n / 2;
  console.log(halfwayPoint);

  for (let i = 0; i < n; i++) {
    numArray.push(i);
  }
  console.log(numArray);

  if (firstNumber > halfwayPoint) {
    return numArray[firstNumber - halfwayPoint];
  }

  return numArray[firstNumber + halfwayPoint];
}

console.log(circleOfNumbers(10, 2));
