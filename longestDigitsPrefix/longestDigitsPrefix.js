function longestDigitsPrefix(inputString) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // const chars = inputString.split("");

  let prefix = "";

  for (let char of inputString) {
    if (!digits.includes(char)) {
      break;
    }

    prefix += char;
  }

  return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
