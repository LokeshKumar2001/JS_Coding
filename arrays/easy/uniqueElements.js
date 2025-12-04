function uniqueElements(nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return nums.filter((num) => map.get(num) == 1);
}
const nums = [1, 2, 2, 2, 3, 4, 4, 5];
console.log(uniqueElements(nums));
