function extractMatrixColumn(matrix, column) {
  let numberArray = [];
  matrix.forEach(row => {
    numberArray.push(row[column]);
  });

  return numberArray;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
