function findEmailDomain(address) {
  const strStart = address.lastIndexOf("@") + 1;
  console.log(strStart);
  return address.slice(strStart, address.length);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

/*
lastIndexOf() Method

Definition and Usage
The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

Note: The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.

This method returns -1 if the value to search for never occurs.

Note: The lastIndexOf() method is case sensitive!

Example
Search a string for the last occurrence of "planet":

var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet");
// n = 36

*/

/* 
JavaScript Array slice() Method

Definition and Usage
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
// citrus = Orange,Lemon

*/
