function htmlEndTagByStartTag(startTag) {
  const splitWords = startTag.split(" ");
  console.log(splitWords);

  const firstWord = splitWords[0].split("");
  console.log(firstWord);
  let endTag = "</";

  for (let i = 1; i < firstWord.length; i++) {
    endTag += firstWord[i];
  }
  console.log(endTag);
  endTag += endTag[endTag.length - 1] === ">" ? endTag : ">";
  console.log(endTag);

  return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
