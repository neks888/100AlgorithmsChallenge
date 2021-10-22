function firstNotRepeatingCharacter(s) {
  const chars = s.split("");
  console.log(chars);
  let duplicates = {};
  let answer = "_";
  let indexAnswer = Number.MAX_SAFE_INTEGER;
  console.log(indexAnswer);

  chars.forEach((element, index) => {
    if (!duplicates.hasOwnProperty(element)) {
      duplicates[element] = {
        count: 1,
        index
      };
    } else {
      duplicates[element].count++;
      duplicates[element].index = index;
    }
  });

  for (const key in duplicates) {
    if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
      answer = key;
      indexAnswer = duplicates[key].index;
    }
  }

  return answer;
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
