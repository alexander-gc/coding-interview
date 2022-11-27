// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1 = [], array2 = []) {
  if (array1.length < 1) return array2;
  if (array2.length < 1) return array1;

  let mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

//console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 20]));

// NOTE: Está mal, corregir ->
function sortedArray(arr = []) {
  let item;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      item = arr[i];

      arr[i] = arr[i + 1];
      arr[i + 1] = item;
    }
  }

  return arr;
}

//console.log(sortedArray([1, 2, 90, 300, 8, 8, 70, 60]));
