function confirmEnding(str, target) {
  const start = str.length - target.length;
  console.log(start);

  return str.substring(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
