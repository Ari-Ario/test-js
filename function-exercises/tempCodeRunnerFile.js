
function calculateTip(billAmount, tipPercentage) {
  // Write your code here
  return billAmount * (tipPercentage/100);
}
console.log("The tip should be: ", calculateTip(50, 15)); // Example: Output should be 7.5