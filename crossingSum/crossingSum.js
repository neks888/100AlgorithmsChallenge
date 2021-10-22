function crossingSum(matrix, a, b) {
  const columnTotal = matrix[a].reduce((a, b) => a + b);
  console.log(columnTotal);

  let rowTotal = 0;
  console.log(matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    rowTotal += i !== a ? matrix[i][b] : 0;
  }

  return columnTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
