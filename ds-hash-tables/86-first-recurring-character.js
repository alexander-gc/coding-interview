// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array = [2, 3, 4, 5];
// It should return undefined

const nums = [1, 2, 2, 1];

function firstRecurringCharacter(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }

  return undefined;
}

//console.log(firstRecurringCharacter(nums));

function firstRecurringCharacter2(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }

  return undefined;
}

console.log(firstRecurringCharacter2(nums));
