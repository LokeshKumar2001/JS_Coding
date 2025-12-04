const nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, num) => (num % 2 === 0 ? (acc += num) : acc), 0);
console.log(sum);
