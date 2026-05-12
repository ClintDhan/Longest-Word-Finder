const findLongestWordLength = str => {
  let wordCount = 0;

  // e split sa nato ang sentence, bahinon nato ang words tas isulod nato sa array (wordArr)

  const wordArr = str.split(" ");

  // atoa napud bahinon per characters ang per word sa array pero mo loop ta diri para isa isahon nato
  for(let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];

    let splitword = word.split("");
  // comparison ni siya nga if daku ang return value sa splitword, e assign nato sa wordcount which is mao atong e return sa functioon
    if(splitword.length > wordCount) {
      wordCount = splitword.length
    }
  }
  return wordCount;
}

console.log(findLongestWordLength("mamamia pisti oh boi"))