function isLucky(n) {
  const luckyNums = n.toString();
  const half = luckyNums.length / 2;
  console.log(half);

  
  // let nSplit = n.toString().split("");
  // console.log(nSplit);

  const firstHalf = getTotal(luckyNums.substring(0, half));
  console.log(firstHalf);
  const secondHalf = getTotal(luckyNums.substring(half, luckyNums.length));

  return firstHalf === secondHalf;
}

function getTotal(n) {
  return n
    .split("")
    .map(char => parseInt(char))
    .reduce((num1, num2) => num1 + num2);
}

console.log(isLucky(1230));
console.log(isLucky(239017));
