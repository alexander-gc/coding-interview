// Advice: anything you do with a recursion
// can be done iteratively (loop)

function findFactorialRecursive(number) {
  if (number === 1) return 1; // base case
  if (number === 2) return 2; // base case

  return number * findFactorialRecursive(number - 1); // recursive case
}

console.log(findFactorialRecursive(2));

function findFactorialIterative(number) {
  let answer = 1;

  if (number === 2) return 2;

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

console.log(findFactorialIterative(2));
