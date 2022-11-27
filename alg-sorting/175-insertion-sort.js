// Select the current index ( arr[i] ) and iterates in reverse by checking
// if current index is shorter than those numbers.

// When shoud i use it? with only a few items, if your input is small
// or items are mostly sorted.

//const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; 
const nums = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(arr) {
    console.log("Inicio:");
    console.log(arr);
    
    for (let i = 1; i < arr.length; i++) {
        let currentIdx = i; 
        
            for (let j = i - 1; j >= 0; j--) {
                if (arr[currentIdx] < arr[j]) {                    
                    [arr[currentIdx], arr[j]] = [arr[j], arr[currentIdx]]
                    currentIdx--;
                } else {
                    break;
                }
            }
    }

    console.log("\nFinal:");
    return arr;
}

//console.log(insertionSort(nums));

function insertionSort2(arr) {
    console.log("Inicio:");
    console.log(arr);
    
    for (let i = 1; i < arr.length; i++) {
        let currentIdx = i; 
        let j = i - 1;
        
        while ( arr[currentIdx] < arr[j] ) {
            [arr[currentIdx], arr[j]] = [arr[j], arr[currentIdx]]
            currentIdx--;
            j--;
        }
    }

    console.log("\nFinal:");
    return arr;
}

console.log(insertionSort2(nums));