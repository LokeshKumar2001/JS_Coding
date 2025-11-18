function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

const res = factorial(5);
console.log(res);

const fact = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fact(n - 1);
};

const res1 = fact(6);
console.log(res1);
