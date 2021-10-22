function isTandemRepeat(inputString) {
  const wordLength = inputString.length;
  console.log(wordLength);

  if (wordLength % 2 === 0) {
    const firstHalf = inputString.slice(0, wordLength / 2);
    const secondHalf = inputString.slice(wordLength / 2, wordLength);
    console.log(firstHalf);
    console.log(secondHalf);

    return firstHalf === secondHalf;
  }

  return false;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
