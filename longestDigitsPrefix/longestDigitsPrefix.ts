function longestDigitsPrefix(inputString: string): string {
  // const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // const chars = inputString.split("");

  let prefix = "";

  for (let char of inputString) {
    const num = parseInt(char);
    if (isNaN(num)) {
      break;
    }

    prefix += char;
  }

  return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
