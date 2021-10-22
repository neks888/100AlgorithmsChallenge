function candies(n, m) {
  let candy = Math.floor(m / n);

  return candy * n;
}

console.log(candies(3, 10));
