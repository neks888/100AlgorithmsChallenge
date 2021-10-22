function lateRide(n: number): number {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;

  const time = hours
    .toString()
    .concat(minutes.toString())
    .split("")
    .map(char => parseInt(char));

  console.log(time);

  return time.reduce((a, b) => a + b);
}

console.log(lateRide(240));
console.log(lateRide(808));

/* 
JavaScript floor() Method

Definition and Usage
The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

*/
