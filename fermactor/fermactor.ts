function fermactor(n: number): number[] {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      // const total = Math.pow(i, 2) - Math.pow(j, 2);
      const total = i ** 2 - j ** 2;

      if (total === n) {
        return [i, j];
      }
    }
  }
}

console.log(fermactor(15));

/* 

JavaScript pow() Method

The pow() method returns the value of x to the power of y (xy).

Example
Return the value of the number 4 to the power of 3 (4*4*4):

Math.pow(4, 3);

*/
