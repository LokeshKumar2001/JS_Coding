const arr = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
const filtered = arr.filter(Boolean);
console.log(filtered);

const filtered1 = arr.filter((val) => val != null && val != undefined);
console.log(filtered1);
