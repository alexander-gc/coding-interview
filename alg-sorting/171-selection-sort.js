// Looks for the smallest number while iterating

//const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; // <- length 11 

// When shoud i use it? the same with bubble sort.

const nums = [5, 2, 7, 19, 0]; 
// [5, 2, 7, 19, 0]; <- initial 
// [0, 2, 5, 7, 19]; <- result

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIdx = i;

        console.log("counter i:", i);

        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[j] + " < " + arr[smallestIdx], ":", arr[j] < arr[smallestIdx], "\n");

            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j
                console.log("New smallest!");
                console.log(arr[smallestIdx], "\n");
            }
        }
        
        [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
        console.log(arr, "\n");
    }

    console.log("Final:");
    return arr;
}

console.log(selectionSort(nums));