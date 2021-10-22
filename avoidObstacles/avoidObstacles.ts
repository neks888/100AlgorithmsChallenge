function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => a - b);
  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every(element => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

/*
## Array sort() method
The sort() method sorts an array alphabetically:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruit
// Apple,Banana,Mango,Orange

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

*/

/* 
JavaScript Array every() Method

Definition and Usage
The every() method checks if all elements in an array pass a test (provided as a function).

The every() method executes the function once for each element present in the array:

If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
If no false occur, every() returns true
Note: every() does not execute the function for array elements without values.

Note: every() does not change the original array

Syntax
array.every(function(currentValue, index, arr), thisValue)

Parameter Values
Parameter	                            Description
function(currentValue, index, arr)	  Required. A function to be run for each element in the array.
Function arguments:
                                      Argument	    Description
                                      currentValue	Required. The value of the current element
                                      index	        Optional. The array index of the current element
                                      arr	          Optional. The array object the current element                  belongs to
                                      thisValue	    Optional. A value to be passed to the function to               be used as its "this" value.
                                                    If this parameter is empty, the value "undefined" will be passed as its "this" value

*/
