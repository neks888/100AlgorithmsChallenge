function checkPalindrome(inputString) {
  const originalWord = inputString.toLowerCase();
  console.log(originalWord);
  const reverseWord = originalWord
    .split("")
    .reverse()
    .join("");
  console.log(reverseWord);
  return originalWord === reverseWord;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
