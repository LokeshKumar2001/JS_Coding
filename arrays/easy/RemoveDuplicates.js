/* 
Remove Duplicates from an Array
       [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
Write a function to remove duplicate values from an array.

*/

function removeDuplicates(arr) {
  // using Set
  //return [...new Set(arr)];

  // filter
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));
