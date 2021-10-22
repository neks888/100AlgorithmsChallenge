function add(param1, param2) {
  return param1 + param2;
}
console.log(add(1, 2));
console.log(add(3, 2));

function add2(...args) {
  let total = 0;

  for (let arg of args) {
    total += arg;
  }

  return total;
}
console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
