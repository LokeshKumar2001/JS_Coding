const swap = (a, b) => {
  // let temp = a;
  // a = b;
  // b = temp;
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};
let [a, b] = swap(5, 6);
console.log(a, b);
