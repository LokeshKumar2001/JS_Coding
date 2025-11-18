/*
Find the Largest Element in an Array
      [3, 1, 4, 1, 5, 9]   → 9
Given an array of numbers, write a function to return the largest number.

*/

const largest = (arr) => {
  // Method-1: Manual for loop
  /* let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;*/

  //2. using max + spread
  // return Math.max(...arr);

  //3. using reduce
  return arr.reduce((num, max) => (num > max ? num : max), arr[0]);
};

const arr = [3, 1, 4, 1, 5, 9];
console.log(`Largest Element: ${largest(arr)}`);

const largestRec = (arr, index = 0, max = -Infinity) => {
  if (index == arr.length) {
    return max;
  }

  if (arr[index] > max) {
    max = arr[index];
  }
  return largestRec(arr, index + 1, max);
};
console.log(`Largest Element: ${largestRec(arr)}`);
