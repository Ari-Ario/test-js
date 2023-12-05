// Hinweis: Deine Aufgabe ist es, die Funktionalität jeder Funktion gemäß den Anweisungen zu implementieren.

// Übung 1: Erstelle eine Funktion namens 'add', die zwei Parameter 'a' und 'b' nimmt.
// Schreibe die Funktion so, dass sie die Summe von 'a' und 'b' zurückgibt.

function add(a, b) {
  // Dein Code hier
  return;
}
console.log("Summe: ", add(3, 5)); // Beispiel: Ausgabe sollte 8 sein

//----------------------------------

// Übung 2: Erstelle eine Funktion namens 'subtract', die zwei Parameter 'a' und 'b' nimmt.
// Schreibe die Funktion so, dass sie das Ergebnis von 'a' minus 'b' zurückgibt.

function subtract(a, b) {
  // Dein Code hier
  return;
}
console.log("Rest: ", subtract(10, 5)); // Beispiel: Ausgabe sollte 5 sein

//----------------------------------

// Übung 3: Erstelle eine Funktion namens 'multiply', die zwei Parameter 'a' und 'b' nimmt.
// Schreibe die Funktion so, dass sie das Produkt von 'a' und 'b' zurückgibt.

function multiply(a, b) {
  // Dein Code hier
  return;
}
console.log("Produkt: ", multiply(3, 5)); // Beispiel: Ausgabe sollte 15 sein

//----------------------------------

// Übung 4: Erstelle eine Funktion namens 'divide', die zwei Parameter 'a' und 'b' nimmt.
// Schreibe die Funktion so, dass sie das Ergebnis von 'a' geteilt durch 'b' zurückgibt.
// Behandle den Fall, wenn 'b' gleich 0 ist, indem "Error" zurückgegeben wird.

function divide(a, b) {
  // Dein Code hier
  if (b === 0) {
    return "Error";
  }
  return;
}
console.log("Quotient: ", divide(10, 5)); // Beispiel: Ausgabe sollte 2 sein

//----------------------------------

// Übung 5: Erstelle eine Funktion namens 'randomNum', die zwei Parameter 'a' und 'b' nimmt.
// Schreibe die Funktion so, dass sie eine zufällige Ganzzahl zwischen 'a' und 'b' (einschließlich) zurückgibt.

function randomNum(a, b) {
  // Dein Code hier
  // Du benötigst Math.floor() und Math.random() dafür.
  return;
}
console.log("Zufällige Zahl: ", randomNum(1, 10)); // Beispiel: Ausgabe sollte eine zufällige Zahl zwischen 1 und 10 sein

//----------------------------------

// Übung 6: Erstelle eine Funktion namens 'square', die einen Parameter 'a' nimmt.
// Schreibe die Funktion so, dass sie das Quadrat von 'a' zurückgibt.

function square(a) {
  // Dein Code hier
  return;
}
console.log("Quadrat: ", square(5)); // Beispiel: Ausgabe sollte 25 sein

//----------------------------------

// Übung 7: Erstelle eine Funktion namens 'rootOf', die einen Parameter 'a' nimmt.
// Schreibe die Funktion so, dass sie die Quadratwurzel von 'a' zurückgibt.

function rootOf(a) {
  // Dein Code hier
  return;
}
console.log("Quadratwurzel: ", rootOf(25)); // Beispiel: Ausgabe sollte 5 sein

//----------------------------------

// Übung 8: Erstelle eine Funktion namens 'doubleCount', die einen Parameter 'a' nimmt.
// Schreibe die Funktion so, dass sie das Doppelte von 'a' zurückgibt.

function doubleCount(a) {
  // Dein Code hier
  return;
}
console.log("Doppeltes: ", doubleCount(5)); // Beispiel: Ausgabe sollte 10 sein

//----------------------------------

// Übung 9: Erstelle eine Funktion namens 'getInput', die einen Parameter 'id' nimmt.
// Schreibe die Funktion so, dass sie das HTML-Element mit der angegebenen 'id'
// mittels der 'getElementById()'-Methode zurückgibt.

// Diese Übung muss im Browser ausgeführt werden, da sie HTML-Elemente benötigt.

function getById(id) {
  // Dein Code hier
  return;
}

const newDiv = document.createElement("div"); // und gib ihm etwas Inhalt
const newContent = document.createTextNode(
  "Hallo und Grüße! Ich bin ein neues Div, das mit JavaScript erstellt wurde."
); // füge den Textknoten zum neu erstellten Div hinzu
newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten Div hinzu
newDiv.id = "result"; // gib dem neu erstellten Div eine ID
document.body.appendChild(newDiv); // füge das neu erstellte Element und seinen Inhalt in das DOM ein

console.log("Element: ", getById("result")); // Beispiel: Ausgabe sollte das HTML-Element mit der ID "result" sein

//----------------------------------

// Übung 10: Erstelle eine Funktion namens 'isEven', die einen Parameter 'number' nimmt.
// Schreibe die Funktion so, dass sie 'true' zurückgibt, wenn 'number' gerade ist, sonst 'false'.

function isEven(number) {
  // Dein Code hier
  return;
}
console.log("Gerade: ", isEven(5)); // Beispiel: Ausgabe sollte 'false' sein

//----------------------------------

// Übung 11: Erstelle eine Funktion namens 'isOdd', die einen Parameter 'number' nimmt.
// Schreibe die Funktion so, dass sie 'true' zurückgibt, wenn 'number' ungerade ist, sonst 'false'.

function isOdd(number) {
  // Dein Code hier
  return;
}
console.log("Ungerade: ", isOdd(4)); // Beispiel: Ausgabe sollte 'true' oder 'false' sein

//----------------------------------

// Übung 12: Erstelle eine Funktion namens 'countDigits', die einen Parameter 'number' nimmt.
// Schreibe die Funktion so, dass sie die Anzahl der Ziffern in 'number' zurückgibt.

function countDigits(number) {
  // Dein Code hier
  return;
}
console.log("Ziffern: ", countDigits(12345)); // Beispiel: Ausgabe sollte 5 sein

//----------------------------------

// Übung 13: Generiere eine Funktion namens 'countLetters', die ein Wort möchte.
// Schreibe die Funktion so, dass sie dir sagt, wie viele Buchstaben das Wort hat.

function countLetters(str) {
  // Dein Code hier
  return;
}
console.log(countLetters("Hallo")); // Beispiel: Ausgabe sollte 5 sein

//----------------------------------

// Übung 14: Erstelle eine Funktion namens 'isPalindrome', die einen Parameter 'str' nimmt.
// Schreibe die Funktion so, dass sie 'true' zurückgibt, wenn 'str' ein Palindrom ist, sonst 'false'.

function isPalindrome(str) {
  // Dein Code hier

  return;
}
console.log("Ist Palindrom: ", isPalindrome("racecar")); // Beispiel: Ausgabe sollte 'true' sein

//----------------------------------

// Übung 15: Erstelle eine Funktion namens 'countOccurrences', die eine Liste von Dingen und eine Sache zum Zählen benötigt.
// Schreibe die Funktion so, dass sie dir sagt, wie oft diese eine Sache in der Liste erscheint.

function countOccurrences(arr, target) {
  // Schreibe deinen Code hier

  return;
}
console.log("Vorkommen: ", countOccurrences([1, 2, 3, 4, 5, 5, 5], 5)); // Beispiel: Ausgabe sollte 3 sein

//----------------------------------

// Übung 16: Generiere eine Funktion namens 'capitalizeFirstLetter', die ein Wort möchte.
// Schreibe die Funktion so, dass sie dir dasselbe Wort gibt, aber mit dem ersten Buchstaben in Großbuchstaben.

function capitalizeFirstLetter(str) {
  // Dein Code hier
  return;
}
console.log("Neues Wort: ", capitalizeFirstLetter("hallo")); // Beispiel: Ausgabe sollte "Hallo" sein

//----------------------------------

// Übung 17: Erstelle eine Funktion namens 'sumArray', die eine Liste von Zahlen benötigt.
// Schreibe die Funktion so, dass sie alle Zahlen in der Liste addiert und dir die Gesamtsumme gibt.

function sumArray(arr) {
  // Schreibe deinen Code hier

  return;
}
console.log("Summe: ", sumArray([1, 2, 3, 4, 5])); // Beispiel: Ausgabe sollte 15 sein

//----------------------------------
// Übung 18: Entwickle eine Funktion namens 'averageArray', die nach einer Liste von Zahlen fragt.
// Schreibe die Funktion so, dass sie dir den Durchschnitt (Mittelwert) aller Zahlen in der Liste sagt.

function averageArray(arr) {
  // Schreibe deinen Code hier

  return;
}
console.log("Durchschnitt: ", averageArray([2, 4, 6, 8, 10])); // Beispiel

//----------------------------------¨
//----------------------------------

// Übung 19: Erstelle eine Funktion namens 'rockPaperScissors', die zwei Spieler benötigt.
// Schreibe die Funktion so, dass sie so tut, als ob sie "Schere, Stein, Papier" spielen und dir sagt, wer gewinnt oder ob es ein Unentschieden gibt.

function rockPaperScissors(player1, player2) {
  // Schreibe hier deinen Code
  return;
}
console.log("Spielergebnis: ", rockPaperScissors("rock", "paper")); // Beispiel: Ausgabe sollte "Spieler 2 gewinnt!" sein

//----------------------------------

// Übung 20: Baue eine Funktion namens 'magic8Ball', die keine Informationen benötigt.
// Schreibe die Funktion so, dass sie dir zufällig eine Antwort gibt, wie ein Magic 8-Ball Spielzeug (z.B. "Ja", "Nein", "Frag später nochmal").

function magic8Ball() {
  // Schreibe hier deinen Code
  return;
}
console.log("Magic8Ball spricht: ", magic8Ball()); // Beispiel: Ausgabe sollte eine der Antworten wie "Ja" oder "Nein" sein

//----------------------------------

// Übung 21: Erstelle eine Funktion namens 'calculateBMI', die zwei Zahlen benötigt: Gewicht in Kilogramm und Größe in Metern.
// Schreibe die Funktion so, dass sie den Body-Mass-Index (BMI) mit einer Formel berechnet und dir sagt.
// Formel: Gewicht geteilt durch (Größe mal Größe).

function calculateBMI(weight, height) {
  // Schreibe hier deinen Code
  return;
}
console.log("Der BMI ist: ", calculateBMI(70, 1.75)); // Beispiel: Ausgabe sollte etwa 22.86 sein

//----------------------------------

// Übung 22: Mache eine Funktion namens 'fahrenheitToCelsius', die eine Temperatur in Fahrenheit nimmt.
// Schreibe die Funktion so, dass sie die Temperatur in Celsius umwandelt und dir das Ergebnis sagt.
// Formel: (Fahrenheit minus 32) mal (5 geteilt durch 9)

function fahrenheitToCelsius(fahrenheit) {
  // Schreibe hier deinen Code
  return;
}
console.log("Celsius: ", fahrenheitToCelsius(140)); // Beispiel: Ausgabe sollte etwa 20 sein

//----------------------------------

// Übung 23: Erstelle eine Funktion namens 'countVowels', die ein Wort oder einen Satz benötigt.
// Schreibe die Funktion so, dass sie zählt und dir die Anzahl der Vokale (a, e, i, o, u) in dem, was du gibst, sagt.

function countVowels(str) {
  // Schreibe hier deinen Code
  return;
}
console.log("Vokalanzahl: ", countVowels("Hallo, Welt!")); // Beispiel: Ausgabe sollte 3 sein

//----------------------------------

// Übung 24: Baue eine Funktion namens 'emojiTranslator', die nach etwas Text fragt.
// Schreibe die Funktion so, dass sie bestimmte Wörter durch Emojis ersetzt und dir den übersetzten Text gibt.

function emojiTranslator(text) {
  // Schreibe hier deinen Code
  const translation = {
    Hallo: "👋",
    Welt: "🌍",
    liebe: "❤️",
  };
  return;
}
console.log(
  "Ausgabe: ",
  emojiTranslator("Hallo Welt, ich liebe Programmieren!")
); // Beispiel: Ausgabe sollte "👋 🌍 ich ❤️ Programmieren!" sein

//----------------------------------

// Übung 25: Erzeuge eine Funktion namens 'coinFlip', die keine Eingabe benötigt.
// Schreibe die Funktion so, dass sie so tut, als würde sie eine Münze werfen, und dir sagt, ob es auf "Kopf" oder "Zahl" gelandet ist.

function coinFlip() {
  // Schreibe hier deinen Code
  return;
}
console.log("Münzseite: ", coinFlip()); // Beispiel: Ausgabe sollte "Kopf" oder "Zahl" sein

//----------------------------------

// Übung 26: Erstelle eine Funktion namens 'reverseArray', die eine Liste benötigt.
// Schreibe die Funktion so, dass sie dir eine neue Liste gibt, in der die Elemente in umgekehrter Reihenfolge stehen.

function reverseArray(arr) {
  // Schreibe hier deinen Code
  return;
}
console.log("Neues Array: ", reverseArray([1, 2, 3, 4, 5])); // Beispiel: Ausgabe sollte [5, 4, 3, 2, 1] sein

//----------------------------------

// Übung 27: Mache eine Funktion namens 'calculateTip', die zwei Zahlen benötigt: den Rechnungsbetrag und den Trinkgeldprozentsatz.
// Schreibe die Funktion so, dass sie den Trinkgeldbetrag auf Basis des Rechnungsbetrags und des Trinkgeldprozentsatzes berechnet und dir gibt.

function calculateTip(billAmount, tipPercentage) {
  // Schreibe hier deinen Code
  return;
}
console.log("Das Trinkgeld sollte sein: ", calculateTip(50, 15)); // Beispiel: Ausgabe sollte 7.5 sein
