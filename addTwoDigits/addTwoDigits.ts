function addTwoDigits(n: any): number {
  const nums = n.toString().split("");

  // return nums.reduce((a: string, b: string) => {
  //   return parseInt(a) + parseInt(b);
  // });

  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));

/* 
JavaScript Number toString()

Definition and Usage
The toString() method converts a number to a string.

Example
Convert a number to a string:

var num = 15;
var n = num.toString()

Syntax
number.toString(radix)

Parameter Values
Parameter	Description
radix	Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36.
2 - The number will show as a binary value
8 - The number will show as an octal value
16 - The number will show as an hexadecimal value
*/

/*
JavaScript Array reduce() Method
Example
Get the sum of the numbers in the array:

var numbers = [65, 44, 12, 4];

function getSum(total, num) {
  return total + num;
}

function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}

*/
