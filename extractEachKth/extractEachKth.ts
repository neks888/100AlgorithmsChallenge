function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter((element, index) => (index + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

/*
JavaScript Array filter() Method

Example
Return an array of all the values in the ages array that are 18 or over:

var ages = [32, 33, 16, 40];
ages.filter(age => age >= 18);
// 32,33,40

Definition and Usage
The filter() method creates an array filled with all array elements that pass a test (provided as a function).

Note: filter() does not execute the function for array elements without values.
Note: filter() does not change the original array.

Syntax
array.filter(function(currentValue, index, arr), thisValue)

Parameter Values
Parameter	                          Description
function(currentValue, index,arr)	  Required. A function to be run for each element in                                        the array.
                                    Function arguments:
                                    Argument	Description
                                    currentValue	Required. The value of the current element
                                    index	Optional. The array index of the current element
                                    arr	Optional. The array object the current element belongs to
thisValue	                          Optional. A value to be passed to the function to be                                      used as its "this" value.
                                    If this parameter is empty, the value "undefined" will be passed as its "this" value
*/
