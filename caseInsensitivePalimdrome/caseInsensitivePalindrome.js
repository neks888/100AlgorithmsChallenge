function isCaseInsensitivePalindrome(inputString) {
  const lowerCase = inputString.toLowerCase();
  const reversedWord = lowerCase
    .split("")
    .reverse()
    .join("");
  console.log(lowerCase);
  console.log(reversedWord);

  return lowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
