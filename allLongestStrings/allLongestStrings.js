function allLongestStrings(inputArray) {
  let longestlength = 0;
  const longestWords = [];

  inputArray.forEach(word => {
    longestlength = longestlength < word.length ? word.length : longestlength;
  });

  inputArray.forEach(word => {
    if (word.length === longestlength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
