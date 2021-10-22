function addBorder(picture) {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  console.log(picture);

  picture.push(wall);
  console.log(picture);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}
console.log(addBorder(["abc", "ded"]));

// function addBorder(picture) {
//   const lengthOfWall = picture[0].length + 2;
//   console.log(lengthOfWall);

//   let wall = "";

//   for (let i = 0; i < lengthOfWall; i++) {
//     wall = wall.concat("*");
//   }
//   console.log(wall);

//   picture.unshift(wall);
//   console.log(picture);
//   picture.push(wall);
//   console.log(picture);

//   for (let i = 1; i < picture.length - 1; i++) {
//     picture[i] = "*".concat(picture[i], "*");
//   }

//   return picture;
// }
// console.log(addBorder(["abc", "ded"]));
