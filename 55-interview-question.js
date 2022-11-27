// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// For example:

// const array1 = ["a", "b", "x", "y"];
// const array2 = ["s", "z", "m"];
// should return false

// Input: 2 parameters - Arrays [] - No size limit
// Output: True or False

const array1 = ["a", "b", "x", "y"];
const array2 = ["s", "z", "a"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
}

//console.log(containsCommonItem(array1, array2));

function containsCommonItem2(arr1, arr2) {
  /*
    let map = {
    "a": true,
    "b": true
    "x": true,
    "y": true
    }
  */

  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) return true;
  }

  return false;
}

//console.log(containsCommonItem2(array1, array2));

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
