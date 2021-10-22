function flatten(arr: any[], result: any[]) {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element, result);
    } else {
      result.push(element);
    }
  });
}

function flattenArray(arr: any[]): any[] {
  const oneArray = [];

  flatten(arr, oneArray);

  return oneArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

/*

Recursion
  
*/
