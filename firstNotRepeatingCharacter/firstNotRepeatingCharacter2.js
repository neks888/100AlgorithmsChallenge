function firstNotRepeatingCharacter(str) {
  let duplicates = {};
  console.log(str[0]);

  for (let i = 0; i < str.length; i++) {
    duplicates[str[i]] = duplicates.hasOwnProperty(str[i])
      ? duplicates[str[i]] + 1
      : 0;
  }
  console.log(duplicates);

  for (let i = 0; i < str.length; i++) {
    if (duplicates[str[i]] === 0) return str[i];
  }

  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
