let nums = [1, 2, 3, 4, 5];
function reverse(nums) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
  console.log(nums);
}
reverse(nums);
let nums1 = [1, 2, 3, 4, 5];
console.log(nums1.reverse());
