function emojiTranslator(text) {
  // Write your code here
  const translation = {
    hello: "👋",
    world: "🌍",
    love: "❤️",
  };
  text = text.split(" ");
  let newArray = Array();
  for(let i=0; i<text.length; i++){
    for (let key in translation){
      var value = translation[key]
      if (text[i] === key.toString()) {
        res = value;
      } else {
      res = text[i];
      }
    }
    newArray.push(res);
  }
  const newText = newArray.join(" ")
  return newText;
}
console.log("Output: ", emojiTranslator("Hello world I love coding!"));