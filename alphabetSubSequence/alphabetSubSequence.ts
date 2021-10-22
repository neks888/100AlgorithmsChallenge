function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charValues: number[] = [];

  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));

/*
JavaScript String charCodeAt() Method

Definition and Usage
The charCodeAt() method returns the Unicode of the character at the specified index in a string.

The index of the first character is 0, the second character 1, and so on.

Tip: You can use the charCodeAt() method together with the length property to return the Unicode of the last character in a string. The index of the last character is -1, the second last character is -2, and so on (See Example below).

Syntax
string.charCodeAt(index)

Parameter Values
Parameter	  Description
index	      Required. A number representing the index of the character you want to return
*/
