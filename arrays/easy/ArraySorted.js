/*
Check if Array is Sorted
      [1, 2, 3, 4, 5]  →  true
Write a function to check if an array is sorted in ascending order.

*/
function arraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 6, 3, 4, 5];
console.log(arraySorted(arr));
