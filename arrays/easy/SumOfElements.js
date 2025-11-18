/* 
Sum of All Elements
       [1, 2, 3, 4] → 10 
Write a function that returns the sum of all elements in an array.

*/

function SumOfAllElement(arr) {
  /*sum = 0;
  for (const v of arr) {
    sum += v;
  }
  return sum;*/

  return arr.reduce((total, num) => (total += num), 0);
}

function sumRec(index = 0, arr) {
  if (index == arr.length) {
    return 0;
  }
  return arr[index] + sumRec(index + 1, arr);
}

const arr = [1, 2, 3, 4];
// console.log(SumOfAllElement(arr));
console.log(sumRec(0, arr));
