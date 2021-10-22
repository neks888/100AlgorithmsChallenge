// Method 1: new Set()

function differentSymbolsNaive(s) {
  const uniqueChars = new Set();
  const inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChars.add(char);
  });

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));

// Method 2: Object.keys

// function differentSymbolsNaive(s) {
//   const uniqueChars = {};
//   const inputChars = s.split("");

//   inputChars.forEach(char => {
//     uniqueChars[char] = 1;
//   });

//   return Object.keys(uniqueChars).length;
// }

// console.log(differentSymbolsNaive("cabca"));

// Method 3: Includes()

// function differentSymbolsNaive(s) {
//   const uniqueChars = [];
//   const inputChars = s.split("");
//   console.log(inputChars);

//   inputChars.forEach(char => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });
//   console.log(uniqueChars);

//   return uniqueChars.length;
// }

// console.log(differentSymbolsNaive("cabca"));
