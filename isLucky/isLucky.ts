function isLucky(n: number): boolean {
  const luckyN = n.toString();
  console.log(luckyN);
  const half = luckyN.length / 2;

  const firstHalf = getTotal(luckyN.substring(0, half));
  console.log(firstHalf);

  const secondHalf = getTotal(luckyN.substring(half, luckyN.length));
  console.log(secondHalf);

  return firstHalf === secondHalf;
}

function getTotal(n: string) {
  return n
    .split("")
    .map(char => parseInt(char))
    .reduce((num1, num2) => num1 + num2);
}

console.log(isLucky(1230));
console.log(isLucky(239017));
