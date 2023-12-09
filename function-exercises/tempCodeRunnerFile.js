  const translation = {
    hello: "👋",
    world: "🌍",
    love: "❤️",
  };
  text = text.split(" ");
  let newArray = Array();
  for(let i=0; i<text.length; i++){
    for (let j=0; j<translation.length; j++){
      if (text[i] in translation) {
        newArray.push(text[i]);
      } else {
      newArray.push(translation[j]);
      }
      j= 0;
    }
  }
  const newText = newArray.join("")
  return newArray;
}
console.log("Output: ", emojiTranslator("Hello world I love coding!"));