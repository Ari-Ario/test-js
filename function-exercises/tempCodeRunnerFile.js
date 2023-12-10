function coinFlip() {
  // Write your code here
  const arr = Array("HEAD", "TAIL");
  for (index in arr) {
    return Math.floor(Math.random()+1);
  }
}
console.log("Coinside: ", coinFlip()); // Example: Output should be "Heads" or "Tails"