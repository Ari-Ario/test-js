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
console.log("New Array: ", reverseArray([1, 2, 3, 4, 5]));