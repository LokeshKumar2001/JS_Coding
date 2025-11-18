function armstrong(n) {
  let count = 0;
  let n1 = n;
  while (n1 != 0) {
    count++;
    n1 = Math.floor(n1 / 10);
  }

  let rev = 0;
  let n2 = n;
  while (n2 != 0) {
    let rem = n2 % 10;
    rev = rev + Math.pow(rem, count);
    n2 = Math.floor(n2 / 10);
  }
  console.log(rev);
  return rev == n ? true : false;
}

let res = armstrong(9474);
console.log(res);

function isArmstrong(n) {
  const digits = n.toString().split("").map(Number);
  const pow = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(d, pow), 0);

  return sum == n ? true : false;
}

const res1 = isArmstrong(9474);
console.log(res1);
