function integerToStringOfFixedWidth(number: number, width: number): string {
  let stringfiedNum = number.toString();

  const numberWidth = stringfiedNum.length;
  const widthDiff = width - numberWidth;
  if (numberWidth < width) {
    let padStart = "";

    for (let i = 0; i < widthDiff; i++) {
      padStart = padStart.concat("0");
    }

    return padStart.concat(stringfiedNum);
  }

  if (numberWidth < width) {
    return stringfiedNum.substring(widthDiff, stringfiedNum.length);
  }

  return stringfiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
