// Note: Your task is to implement the functionality of each function according to the instructions.

// Exercise 1: Create a function named 'add' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the sum of 'a' and 'b'.

function add(a, b) {
  // Your code here
  const sum = a+ b;
  return sum;
}
console.log("Sum: ", add(3, 5)); // Example: Output should be 8

//----------------------------------

// Exercise 2: Create a function named 'subtract' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the result of subtracting 'b' from 'a'.

function subtract(a, b) {
  // Your code here
  const sub = a -b;
  return sub;
}
console.log("Remainder: ", subtract(10, 5)); // Example: Output should be 5

//----------------------------------

// Exercise 3: Create a function named 'multiply' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the product of 'a' and 'b'.

function multiply(a, b) {
  // Your code here
  const mult = a*b;
  return mult;
}
console.log("Product: ", multiply(3, 5)); // Example: Output should be 15

//----------------------------------

// Exercise 4: Create a function named 'divide' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the result of dividing 'a' by 'b'.
// Handle the case where 'b' is equal to 0 by returning "Error".

function divide(a, b) {
  // Your code here
  if (b === 0) {
    return "Error";
  }
  const div = a/b;
  return div;
}
console.log("Quotient: ", divide(10, 5)); // Example: Output should be 2

//----------------------------------

// Exercise 5: Create a function named 'randomNum' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns a random integer between 'a' and 'b' (inclusive).

function randomNum(a, b) {
  // Your code here
  // You need Math.floor() and Math.random() for this.
  let c = Math.random() * (a-b)+a;
  c = Math.floor(c) * (-1)
  return  c;
}
console.log("Random number: ", randomNum(1, 10)); // Example: Output should be a random number between 1 and 10

//----------------------------------

// Exercise 6: Create a function named 'square' that takes a parameter 'a'.
// Write the function in a way that it returns the square of 'a'.

function square(a) {
  // Your code here
  return a*a;
}
console.log("Square: ", square(5)); // Example: Output should be 25

//----------------------------------

// Exercise 7: Create a function named 'rootOf' that takes a parameter 'a'.
// Write the function in a way that it returns the square root of 'a'.

function rootOf(a) {
  // Your code here
  if (a <= 0) {
    return "write a positive number"
  }
  let counter = 1;
  while (counter < (a/2)) {
    newNum = counter * counter;
    if (newNum === a) {
      res = counter;
    }
    counter ++ ;
  }
  return res;
}
console.log("Square root: ", rootOf(25)); // Example: Output should be 5

//----------------------------------

// Exercise 8: Create a function named 'doubleCount' that takes a parameter 'a'.
// Write the function in a way that it returns double the value of 'a'.

function doubleCount(a) {
  // Your code here
  return a*2;
}
console.log("Double: ", doubleCount(5)); // Example: Output should be 10

//----------------------------------

// Exercise 9: Create a function named 'getInput' that takes a parameter 'id'.
// Write the function in a way that it returns the HTML element with the specified 'id'
// using the 'getElementById()' method.

function getInput(id) {
  // return getById;
}

// This exercise must be done in the browser console, because it requires access to HTML-elements.

function getById(id) {
  // Your code here
  const variable = document.getElementById("result")
  return variable;
}

const newDiv = document.createElement("div"); // and give it some content
const newContent = document.createTextNode(
  "Hi there and greetings! I'm a new div generated with JavaScript."
); // add the text node to the newly created div
newDiv.appendChild(newContent); // add the text node to the newly created div
newDiv.id = "result"; // add an id to the newly created div
document.body.appendChild(newDiv); // add the newly created element and its content into the DOM

console.log("Element: ", getById("result")); // Example: Output should be the HTML element with the id "result"

//----------------------------------

// Exercise 10: Create a function named 'isEven' that takes a parameter 'number'.
// Write the function in a way that it returns true if 'number' is even, otherwise false.

function isEven(number) {
  // Your code here
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}
console.log("Even: ", isEven(5)); // Example: Output should be false

//----------------------------------

// Exercise 11: Create a function named 'isOdd' that takes a parameter 'number'.
// Write the function in a way that it returns true if 'number' is odd, otherwise false.

function isOdd(number) {
  // Your code here
  if (number % 2) {
    return true;
  } else {
    return false;
  }
}
console.log("Odd: ", isOdd(4)); // Example: Output should be true or false

//----------------------------------

// Exercise 12: Create a function named 'countDigits' that takes a parameter 'number'.
// Write the function in a way that it returns the number of digits in 'number'.

function countDigits(number) {
  // Your code here
  let word = number.toString()
  let arr = word.split("")
  counter = 0;
  while (word) {
    arr.pop()
    counter ++;
    word = arr.join("")
  }
  return counter;
}
console.log("Digits: ", countDigits(12345)); // Example: Output should be 5

//----------------------------------

// Exercise 13: Generate a function called 'countLetters' that wants a word.
// Write the function so that it tells you how many letters the word has.

function countLetters(str) {
  // Your code here
  let word = str.split("");
  let counter = 0;
  while (word.length > 0) {
    let char = word.pop();
    counter ++;
  }
  return counter;
}
console.log(countLetters("Hello")); // Example: Output should be 5

//----------------------------------

// Exercise 14: Create a function named 'isPalindrome' that takes a parameter 'str'.
// Write the function in a way that it returns true if 'str' is a palindrome, otherwise false.

function isPalindrome(str) {
  // Your code here
  let sentenceArr = str.split("");
  let res = Array();
  while (sentenceArr.length > 0) {
    let char = sentenceArr.pop();
    res.push(char);
  }
  const final = res.join("")

    if (final === str) {
      return true;
  } else {
    return false;
  }
}
console.log("Is palindrome: ", isPalindrome("racecar")); // Example: Output should be true

//----------------------------------

// Exercise 15: Craft a function called 'countOccurrences' that needs a list of things and one thing to count.
// Write the function so that it tells you how many times that one thing appears in the list.

function countOccurrences(arr, target) {
  // Write your code here
  let counter = 0;
  let newArr = arr;
  while (newArr.length > 0) {
    let lastEl = newArr.pop();
    if (lastEl == target) {
      counter ++
    }
  }
  return counter;
}
console.log("Occurrence: ", countOccurrences([1, 5, 2, 3, 4, 5, 5, 5], 5)); // Example: Output should be 3

//----------------------------------

// Exercise 16: Generate a function called 'capitalizeFirstLetter' that wants a word.
// Write the function so that it gives you the same word but with the first letter in uppercase.

function capitalizeFirstLetter(str) {
  // Your code here
  let arr = str.split("");
  let char = arr[0].toString();
  char = char.toUpperCase();
  arr[0] = char;
  return arr.join("")

}
console.log("New Word: ", capitalizeFirstLetter("hello")); // Example: Output should be "Hello"

//----------------------------------

// Exercise 17: Craft a function called 'sumArray' that requires a list of numbers.
// Write the function so that it adds up all the numbers in the list and gives you the total.

function sumArray(arr) {
  // Write your code here
 let newArr = arr;
 let sum = 0;
 for (let i = 0 ; i < arr.length; i++) {
  sum = sum + arr[i];
 }
  return sum;
}
console.log("Sum: ", sumArray([1, 2, 3, 4, 5])); // Example: Output should be 15

//----------------------------------
// Exercise 18: Develop a function called 'averageArray' that asks for a list of numbers.
// Write the function so that it tells you the average (mean) of all the numbers in the list.

function averageArray(arr) {
  // Write your code here
  let sum = 0;
  for (let i = 0 ; i < arr.length; i++) {
   sum = sum + arr[i];
  }
   return sum / arr.length;
}
console.log("Avarage: ", averageArray([2, 4, 6, 8, 10])); // Example: Output should be 6

//----------------------------------

// Exercise 19: Make a function named 'rockPaperScissors' that needs two players.
// Write the function so that it pretends they're playing rock-paper-scissors and tells you who wins or if it's a tie.

function rockPaperScissors(player1, player2) {
  // Write your code here
  let arr = ["rock", "scissors", "paper"];
  let p1 = 0;
  let p2 = 0;
  for (let i=0; i<3; i++) {
    if (player1 == arr[i]) {
      p1 = i;
    }
    if (player2 == arr[i]) {
      p2 = i;
    }
  }
  if (p1 == 2 && p2== 0) {
    return "player 1 wins!"
  } else if (p1 > p2 ) {
    return "player 1 wins!"
  } else {
    return "player 2 wins!"
  }

}
console.log("Game result: ", rockPaperScissors("rock", "paper")); // Example: Output should be "Player 2 wins!"

//----------------------------------

// Exercise 20: Build a function called 'magic8Ball' that doesn't need any information.
// Write the function so that it randomly gives you an answer like a magic 8-ball toy (e.g., "Yes", "No", "Ask again later").

function magic8Ball() {
  // Write your code here
  const arr = Array("Yes", "No", "ask again later.");
  return arr[Math.floor(Math.random()*3)]
}
console.log("Magic8Ball Spoke: ", magic8Ball()); // Example: Output should be one of the responses like "Yes" or "No"

//----------------------------------

// Exercise 21: Construct a function called 'calculateBMI' that wants two numbers: weight in kilograms and height in meters.
// Write the function so that it calculates and tells you the Body Mass Index (BMI) using a formula.
// Formula weight devided by (height multiplied by height).

function calculateBMI(weight, height) {
  // Write your code here
  return weight/height**2;
}
console.log("The BMI is: ", calculateBMI(70, 1.75)); // Example: Output should be around 22.86

//----------------------------------

// Exercise 22: Make a function named 'fahrenheitToCelsius' that takes a temperature in Fahrenheit.
// Write the function so that it changes the temperature to Celsius using a formula and tells you the result.
// Formula: (Fareneit minus 32) multiplied by (5 devided by 9)

function fahrenheitToCelsius(fahrenheit) {
  // Write your code here
  return (fahrenheit-32)*(5/9);
}
console.log("Celcius: ", fahrenheitToCelsius(140)); // Example: Output should be around 60

//----------------------------------

// Exercise 23: Create a function called 'countVowels' that wants a word or sentence.
// Write the function so that it counts and tells you the number of vowels (a, e, i, o, u) in what you gave.

function countVowels(str) {
  // Write your code here
  const arr = str.split("");
  let counter = 0;
  for (let i=0; i<str.length; i++) {
    if (arr[i] == "a" || arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
      counter++
    }
  }
  return counter;
}
console.log("Vovel Count: ", countVowels("Hello, world!")); // Example: Output should be 3

//----------------------------------

// Exercise 24: Build a function named 'emojiTranslator' that asks for some text.
// Write the function so that it replaces certain words with emojis and gives you the translated text.

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
      if (text[i].toLowerCase() === key) {
        res = value;
        break;
      } else {
        res = text[i]
      }
    }
    newArray[i] = res;
  }
  const newText = newArray.join(" ")
  return newText;
}
console.log("Output: ", emojiTranslator("Hello world I love coding!")); // Example: Output should be "👋 🌍 I ❤️ coding!"

//----------------------------------

// Exercise 25: Generate a function called 'coinFlip' that doesn't need any input.
// Write the function so that it pretends to flip a coin and tells you if it landed on "Heads" or "Tails".

function coinFlip() {
  // Write your code here
  const arr = Array("HEAD", "TAIL");
  for (index in arr) {
    return arr[Math.floor(Math.random()*2)];
  }
}
console.log("Coinside: ", coinFlip()); // Example: Output should be "Heads" or "Tails"

//----------------------------------

// Exercise 26: Create a function named 'reverseArray' that needs a list.
// Write the function so that it gives you a new list with the items in reverse order.

function reverseArray(arr) {
  // Write your code here
  let currentArray = arr;
  let reversedArray = Array();
  // for (let i=0; i<currentArray.length; i++) or
  while (currentArray.length !== 0){
    let popItem = currentArray.pop();
    reversedArray.push(popItem);
  }
  return reversedArray;
}
console.log("New Array: ", reverseArray([1, 2, 3, 4, 5])); // Example: Output should be [5, 4, 3, 2, 1]

//----------------------------------

// Exercise 27: Make a function called 'calculateTip' that wants two numbers: the bill amount and the tip percentage.
// Write the function so that it calculates and gives you the amount of tip based on the bill and tip percentage.

function calculateTip(billAmount, tipPercentage) {
  // Write your code here
  return billAmount * (tipPercentage/100);
}
console.log("The tip should be: ", calculateTip(50, 15)); // Example: Output should be 7.5
