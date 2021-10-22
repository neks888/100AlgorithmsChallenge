function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let plantHeight = 0;

  while (plantHeight < desiredHeight) {
    days++;
    plantHeight += upSpeed;
    if (plantHeight < desiredHeight) {
      plantHeight += downSpeed;
    }
  }

  return days;
}

console.log(growingPlant(100, 10, 910));
