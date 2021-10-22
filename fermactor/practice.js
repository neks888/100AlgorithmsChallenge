// 8 Useful JavaScript Tricks

// 1. Ensure Array Values

/* For ensuring the length equality between the mismatching rows you can use Array.fill method.*/

let array = Array(5).fill("");
console.log(array);

// 2. Get Array Unique Values

/* ES6 provides a couple of very neat ways of extracting the unique values from an array. Unfortunately, they do not do well with arrays filled with non-primitive types. */

const cars = ["Mazda", "Ford", "Renault", "Opel", "Mazda"];

const uniqueArrayWithFromMethod = Array.from(new Set(cars));
console.log(uniqueArrayWithFromMethod);

const uniqueWithSpreadOperator = [...new Set(cars)];
console.log(uniqueWithSpreadOperator);

/* 
The Array.from() method returns an Array object from any object with a length property or an iterable object.
*/

// 3. Merge Objects & Array of Objects Using Spread Operator

// merging objects
const product = { name: "Milk", packaging: "Plastic", price: "5$" };
const manufacturer = { name: "Company Name", address: "The Company Address" };

const productManufacturer = { ...product, ...manufacturer };
console.log(productManufacturer);

// merging an array of objects into one
const cities = [
  { name: "Paris", visited: "no" },
  { name: "Lyon", visited: "no" },
  { name: "Marseille", visited: "yes" },
  { name: "Rome", visited: "yes" },
  { name: "Milan", visited: "no" },
  { name: "Palermo", visited: "yes" },
  { name: "Genoa", visited: "yes" },
  { name: "Berlin", visited: "no" },
  { name: "Hamburg", visited: "yes" },
  { name: "New York", visited: "yes" }
];

const result = cities.reduce((total, currentValue) => {
  return {
    ...total,
    [currentValue.name]: currentValue.visited
  };
}, {});
console.log(result);

/* 
The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.
*/

// 4. Map the Array (without the Array.map)

const cities2 = [
  { name: "Paris", visited: "no" },
  { name: "Lyon", visited: "no" },
  { name: "Marseille", visited: "yes" },
  { name: "Rome", visited: "yes" },
  { name: "Milan", visited: "no" },
  { name: "Palermo", visited: "yes" },
  { name: "Genoa", visited: "yes" },
  { name: "Berlin", visited: "no" },
  { name: "Hamburg", visited: "yes" },
  { name: "New York", visited: "yes" }
];

const cityNames = Array.from(cities2, ({ name }) => name);
console.log(cityNames);
