const fibonacci = (n) => {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// let res = fibonacci(5);
// console.log(res);

const fibonacci1 = (n) => {
  if (n < 2) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};
// console.log(fibonacci1(5));

// Generate Fibonacci series
const genFib = (n) => {
  if (n <= 0) return [];
  let series = [0];
  if (n == 1) return series;

  series.push(1);
  if (n == 2) return series;

  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  console.log(series);
};

genFib(5);
