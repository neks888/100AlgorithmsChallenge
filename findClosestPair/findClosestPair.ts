function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      const distanceSum = numbers[i] + numbers[j];
      console.log(distanceSum);
      const absDistance = Math.abs(i - j);
      console.log(absDistance);

      if (sum === distanceSum) {
        if (distance === -1 || absDistance < distance) {
          distance = absDistance;
        }
      }
    }
  }

  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));

/* 
JavaScript abs() Method
The abs() method returns the absolute value of a number.

Example
Return the absolute value of a number:

Math.abs(-7.25);
// 7.25

*/
