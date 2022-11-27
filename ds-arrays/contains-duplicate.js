//Given an integer array nums, return true if any value appears at
//least twice in the array, and return false if every element is distinct.

const nums = [1, 2, 3, 4, 5, 1];

function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }

  return false;
}

//console.log(containsDuplicate(nums));

function containsDuplicate2(arr) {
  let map = {};

  /*
  let map = {
    1: true,
    2: true,
    3: true,
    3: true
  }
  */

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true;
    } else {
      const item = arr[i];
      map[item] = true;
    }
  }

  return false;
}

console.log(containsDuplicate2(nums));

function containsDuplicate3(arr) {
  arr.sort((a, b) => b - a);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) {
      return true;
    }
  }

  return false;
}

//console.log(containsDuplicate3(nums));
