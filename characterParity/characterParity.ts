function characterParity(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result) ? "Not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));

/*
## parseInt Function

The parseInt() function parses a string and returns an integer.

The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the following:

If the string begins with "0x", the radix is 16 (hexadecimal)
If the string begins with "0", the radix is 8 (octal). This feature is deprecated
If the string begins with any other value, the radix is 10 (decimal)
Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseInt() returns NaN.

Syntax
parseInt(string, radix)

Parameter   Values
Parameter	  Description
string	    Required. The string to be parsed
radix	      Optional. A number (from 2 to 36) that represents the numeral system to be used
*/
