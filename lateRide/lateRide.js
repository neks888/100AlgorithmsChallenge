function lateRide(n) {
  const hours = Math.floor(n / 60);
  const mins = n % 60;
  console.log(hours);
  console.log(mins);

  const time = hours
    .toString()
    .concat(mins.toString())
    .split("")
    .map(char => parseInt(char))
    .reduce((a, b) => a + b);

  return time;
}

console.log(lateRide(240));
console.log(lateRide(808));

/* 
JavaScript floor() Method

Definition and Usage
The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

*/
