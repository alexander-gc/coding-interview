// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 . . .

function fibonacciIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibonacciIterative(6));

function fibonacciRecursive(n) {
  // return 0 || 1
  if (n < 2) return n; // base case

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // recursive case
}

console.log(fibonacciRecursive(6));
