function differentSymbolsNaive(s: string): number {
  // const uniqueChars: string[] = [];
  // const inputChars: string[] = s.split("");

  // inputChars.forEach(char => {
  //   if (!uniqueChars.includes(char)) {
  //     uniqueChars.push(char);
  //   }
  // });

  // return uniqueChars.length;

  // const uniqueChars = {};
  // const inputChars = s.split("");

  // inputChars.forEach(char => {
  //   uniqueChars[char] = 1;
  // });

  // return Object.keys(uniqueChars).length;

  const uniqueChars = new Set();
  const inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChars.add(char);
  });

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));

/* 
JavaScript String includes() Method

Example
Check if a string includes "world":

var str = "Hello world, welcome to the universe.";
var n = str.includes("world");

Definition and Usage
The includes() method determines whether a string contains the characters of a specified string.

This method returns true if the string contains the characters, and false if not.

Note: The includes() method is case sensitive.

Syntax
string.includes(searchvalue, start)

Parameter Values

Parameter	    Description
searchvalue	  Required. The string to search for
start	        Optional. Default 0. At which position to start the search

*/

/* 
JavaScript Set Objects

The Set object lets you store unique values of any type, whether primitive values or object references.

Set.prototype Constructor

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false

SyntaxSection
new Set([iterable]);

ParametersSection
iterable
If an iterable object is passed, all of its elements will be added to the new Set. If you don't specify this parameter, or its value is null, the new Set is empty.

Return valueSection
A new Set object.


DescriptionSection
Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

*/
