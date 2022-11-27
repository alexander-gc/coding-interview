let arr = [10, 20, 2, 3];
let target = 13;

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }

  return [];
}

//console.log(twoSum(arr, target));

function twoSum2(arr, target) {
  /*
  const map = {
    10: 0, 
    20: 1,
    2: 2,
    3: 3
  }
  */

  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let complementPair = target - value;

    if (map[complementPair] != undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }

  return [];
}

//console.log(twoSum2(arr, target));
