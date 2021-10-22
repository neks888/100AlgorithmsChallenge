function makeArrayConsecutive2(statues: number[]): number {
  let count = 0;
  const sortedStatues = statues.sort((a, b) => a - b);
  console.log(sortedStatues);

  const min = sortedStatues[0];
  const max = sortedStatues[sortedStatues.length - 1];

  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));

/*

JavaScript Array sort() Method

Definition and Usage
The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

Syntax
array.sort(compareFunction)

Parameter Values
Parameter	        Description
compareFunction	  Optional. A function that defines an alternative sort order. The function should                        return a negative, zero, or positive value, depending on the arguments, like:
                  function(a, b){return a-b}
                  When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

*/
