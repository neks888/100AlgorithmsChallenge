function crossingSum(matrix: number[][], a: number, b: number): number {
  const columnTotal = matrix[a].reduce((total, num) => total + num);
  let rowTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    console.log(i);
    console.log(matrix[i][b]);
    console.log(a);
    rowTotal += i !== a ? matrix[i][b] : 0;
    console.log(rowTotal);
    console.log(columnTotal);
  }

  return columnTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));

/* 
JavaScript Array reduce() Method

Definition and Usage
* The reduce() method reduces the array to a single value.
* The reduce() method executes a provided function for each value of the array (from left-to-right).
* The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

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
