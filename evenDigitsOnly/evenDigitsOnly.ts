function evenDigitsOnly(n: number): boolean {
  const digits = n.toString().split("");
  console.log(digits);

  return digits.every(digit => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

/*
JavaScript String split() Method

Example
Split a string into an array of substrings:
var str = "How are you doing today?";
var res = str.split(" ");
// How,are,you,doing,today?

Definition and Usage
The split() method is used to split a string into an array of substrings, and returns the new array.
Tip: If an empty string ("") is used as the separator, the string is split between each character.
Note: The split() method does not change the original string.

Syntax
string.split(separator, limit)

Parameter Values
Parameter	        Description
separator	        Optional. Specifies the character, or the regular expression, to use for                      splitting the string. If omitted, the entire string will be returned (an                    array with only one item)
limit	            Optional. An integer that specifies the number of splits, items after the                     split limit will not be included in the array
*/

/*
JavaScript Array every() Method

Example
Check if all the values in the ages array are 18 or over:

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

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
Parameter	Description
function(currentValue, index, arr)	Required. A function to be run for each element in the array.
                                    Function arguments:
                                    Argument	      Description
                                    currentValue	  Required. The value of the current                        element
                                    index	          Optional. The array index of the current                  element
                                    arr	            Optional. The array object the current                    element belongs to
thisValue                           Optional. A value to be passed to the function to be                                         used as its "this" value.
                                    If this parameter is empty, the value "undefined" will be passed as its "this" value
*/
