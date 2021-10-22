function houseOfCats(legs) {
  let total = [];

  total.push(Math.floor(legs / 4));
  total.push(Math.floor(legs / 2));

  console.log(total);

  return total;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
