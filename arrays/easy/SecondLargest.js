/* 
Find the Second Largest Element
      [3, 1, 4, 1, 5, 9]  → 5
Write a function to return the second largest number in an array.

*/

function secondLargest(arr) {
  let max = arr[0],
    secondMax = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    }
    if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

// using reduce function
function secondLargestReduce(arr) {
  let largest1 = -Infinity,
    secondLargest1 = -Infinity;
  arr.reduce((_, num) => {
    if (num > largest1) {
      secondLargest1 = largest1;
      largest1 = num;
    }
    if (num !== largest1 && num > secondLargest1) {
      secondLargest1 = num;
    }
  });
  return secondLargest1;
}
arr = [3, 1, 4, 1, 5, 9];
console.log(`second Largest: ${secondLargest(arr)}`);
console.log(`second Largest: ${secondLargestReduce(arr)}`);
