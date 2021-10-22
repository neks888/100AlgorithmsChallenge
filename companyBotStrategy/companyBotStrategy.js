function companyBotStrategy(trainingData) {
  let time = 0;
  let correct = 0;

  console.log(trainingData[0][0]);

  trainingData.forEach(question => {
    if (question[1] === 1) {
      time += question[0];
      correct += question[1];
    }
  });

  return time / correct || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
