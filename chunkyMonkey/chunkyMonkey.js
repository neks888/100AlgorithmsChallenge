function chunkyMonkey(arr, size) {
  let nested = [];
  let count = 0;

  while (count < arr.length) {
    nested.push(arr.slice(count, (count += size)));
    console.log(count);
  }

  return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
