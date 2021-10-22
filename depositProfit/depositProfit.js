function depositProfit(deposit, rate, threshold) {
  let total = deposit;
  let years = 0;
  while (total < threshold) {
    total += total * (rate / 100);
    years++;
  }

  return years;
}

console.log(depositProfit(100, 20, 170));
