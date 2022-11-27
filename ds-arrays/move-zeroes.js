const nums = [0, 1, 0, 3, 12];
//Output: [1, 3, 12, 0, 0]

function moveZeroes(arr) {
  let lastNonZeroIndex = 0; // Ultimo INDICE que NO es cero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[lastNonZeroIndex] = arr[i];
      lastNonZeroIndex++;
    }
  }

  for (let j = lastNonZeroIndex; j < arr.length; j++) {
    arr[j] = 0;
  }

  return arr;
}

console.log("Array inicio:");
console.log(nums);
console.log("Array final:");
console.log(moveZeroes(nums));
