const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(arr) {
  let solution = arr[0];

  console.log("Array inicio:");
  console.log(arr);

  console.log("Solution inicio: " + solution);

  for (let i = 1; i < arr.length; i++) {
    console.log("============================");
    console.log("Loop 'i': " + i);

    console.log("Solution antes: " + solution);
    console.log("Arr number antes:" + arr[i]);

    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    solution = Math.max(solution, arr[i]);

    console.log("Arr number despues:" + arr[i]);
    console.log("Solution despues: " + solution);
  }

  console.log("============================");
  console.log("Array final:");
  console.log(arr);

  console.log("============================");
  console.log("Solution final: " + solution);
  return solution;
}

console.log(maxSubArray(arr));
