function extractMatrixColumn(matrix: number[][], column: number): number[] {
  const matrixColumn: number[] = [];

  matrix.forEach(row => matrixColumn.push(row[column]));

  /*
  - The forEach() method calls a provided function once for each element in an array, in order.
  - Note: forEach() does not execute the function for array elements without values.
  */

  return matrixColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
