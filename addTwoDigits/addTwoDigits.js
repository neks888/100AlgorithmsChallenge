function addTwoDigits(n) {
  const nums = n.toString().split("");

  return nums.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
}
console.log(addTwoDigits(29));

// function addTwoDigits(n) {
//   const splitNumbers = n.toString().split("");

//   return parseInt(splitNumbers[0]) + parseInt(splitNumbers[1]);
// }
// console.log(addTwoDigits(29));
