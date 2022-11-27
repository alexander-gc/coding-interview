// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Slice: hace una copia del array. -> array.slice(0, 5);
// Splice: edita el array actual. -> array.splice(idx, 0, value); // array.splice(2); idx 2  - idx final

const nums = [1, 2, 3, 4, 5, 6, 7];

function rotateArray(arr = [], steps) {
  let i = arr.length - steps;
  //            7 - 3 = 4

  let firstPart = arr.slice(0, i); // 0 - 3 idx
  let lastPart = arr.slice(i, arr.length); // 4 - 6 idx

  return lastPart.concat(firstPart);
}

//console.log(rotateArray(nums, 3));

function revNums(arr, start, end) {
  console.log("Llamando funcion:");

  while (start < end) {
    console.log("Start antes: " + start);
    console.log("End antes: " + end);

    console.log("\n Array antes:");
    console.log(arr);

    console.log("\n[arr[end], arr[start]] - antes");
    console.log([arr[end], arr[start]]);

    console.log("[arr[start], arr[end]]");
    console.log([arr[start], arr[end]]);

    [arr[start], arr[end]] = [arr[end], arr[start]];

    // That (above) is this (below) of another way -> (but better)
    //let actualStart = arr[start];
    //arr[start] = arr[end];
    //arr[end] = actualStart;

    console.log("[arr[start], arr[end]] - despues");
    console.log([arr[start], arr[end]]);

    start++;
    end--;

    console.log("\nArray despues:");
    console.log(arr);

    console.log("\nStart despues: " + start);
    console.log("End despues: " + end + "\n");
  }
}

function rotateArray2(arr = [], steps) {
  steps = steps % arr.length;

  arr.reverse();

  revNums(arr, 0, steps - 1);
  revNums(arr, steps, arr.length - 1);

  //return arr;
}

//console.log(rotateArray2(nums, 3));

function rotateArray3(arr = [], steps) {
  for (let i = 0; i < steps; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
}

//console.log(rotateArray3(nums, 3));

function rotateArray4(arr = [], steps) {
  let deletedArray = arr.splice(arr.length - steps); // idx start - idx final

  for (let i = 0; i < deletedArray.length; i++) {
    arr.splice(i, 0, deletedArray[i]); // splice (0, 0, 5) splice(1, 0, 6)
    //                                           idx   value     idx   value
  }

  return arr;
}

//console.log(rotateArray4([1, 2, 3, 4, 5, 6, 7], 3));

function rotateArray5(arr = [], steps) {
  let deletedArray = arr.splice(arr.length - steps);

  for (let i = deletedArray.length - 1; i >= 0; i--) {
    arr.unshift(deletedArray[i]);
  }

  return arr;
}

//console.log(rotateArray5([1, 2, 3, 4, 5, 6, 7], 3));
