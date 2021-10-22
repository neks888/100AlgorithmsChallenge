function chunkyMonkey(arr: any[], size: number): any[][] {
  const nested = [];
  let count = 0;

  while (count < arr.length) {
    nested.push(arr.slice(count, (count += size)));
  }

  return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

/* 
Array slice() Method

Definition and Usage
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.

Syntax
array.slice(start, end)

Parameter Values
Parameter	    Description
start	        Optional. An integer that specifies where to start the selection (The first element has               an index of 0). Use negative numbers to select from the end of an array. If omitted, it               acts like "0"
end	          Optional. An integer that specifies where to end the selection. If omitted, all                       elements from the start position and to the end of the array will be selected. Use                    negative numbers to select from the end of an array
*/
