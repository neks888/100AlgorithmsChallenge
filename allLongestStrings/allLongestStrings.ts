function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

/* 
JavaScript Array forEach() Method

Definition and Usage
The forEach() method calls a provided function once for each element in an array, in order.

Note: forEach() does not execute the function for array elements without values.

Syntax
array.forEach(function(currentValue, index, arr), thisValue)

Parameter Values
Parameter	                          Description
function(currentValue, index, arr)	Required. A function to be run for each element in the array.
                                    Function arguments:
                                    Argument	Description
                                    currentValue	Required. The value of the current element
                                    index	Optional. The array index of the current element
                                    arr	Optional. The array object the current element belongs to
thisValue	                          Optional. A value to be passed to the function to be used as its                                     "this" value.
                                    If this parameter is empty, the value "undefined" will be passed as its "this" value
*/
