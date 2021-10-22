function stringsConstruction(a: string, b: string): number {
  const aCount = getAlphabetCount(a);
  console.log(aCount);
  const bCount = getAlphabetCount(b);
  console.log(bCount);

  const counts = [];

  for (let char in aCount) {
    if (bCount.hasOwnProperty(char)) {
      counts.push(Math.floor(bCount[char] / aCount[char]));
    } else {
      return 0;
    }
  }

  return Math.min(...counts);
}

function getAlphabetCount(word: string): object {
  const chars = word.split("");
  const alphabetCount = {};

  chars.forEach(char => {
    if (alphabetCount.hasOwnProperty(char)) {
      alphabetCount[char]++;
    } else {
      alphabetCount[char] = 1;
    }
  });

  return alphabetCount;
}

console.log(stringsConstruction("abc", "abccba"));
