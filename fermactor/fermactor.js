function fermactor(n) {
  for (let i = 1; i < n; i++) {
    console.log(i);
    for (let j = 1; j < i; j++) {
      console.log(j);
      let total = Math.pow(i, 2) - Math.pow(j, 2);
      if (total === n) {
        return [i, j];
      }
    }
  }
}

console.log(fermactor(15));
