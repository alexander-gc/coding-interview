// Divide the array recursively until to divide the array in a only value. 

// When shoud i use it? if you're worried about the worst case scenarios, use it.
// If you had huge files that can be sorted in memory.

//const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; 
const nums = [4, 2, 3, 1]; 

function mergeSort(arr = []) {
    let length = arr.length;

    if (length === 1) return arr;
    
    // Split array in into left and right;
    let left = arr.slice(0, length / 2); 
    let right = arr.slice(length / 2);

    return merge(
        mergeSort(left), 
        mergeSort(right) 
    );
}

function merge(left = [], right = []) {
    const arr = [];
    let i = 0; 
    let j = 0; 

    console.log("Llamando función merge...", left, right);

    while (i < left.length || j < right.length) {
        console.log("Left:", left[i]);
        console.log("Right:", right[j], "\n");
        
        if (left[i] < right[j] || right[j] === undefined) {
            console.log("Left es menor:", left[i]);
            arr.push(left[i]); 
            i++;
        } else {
            console.log("Right es menor:", right[j]);
            arr.push(right[j]);
            j++;
        }

        console.log("Progreso:", arr);
    }

    console.log("Progreso final:", arr, "\n");
    return arr; 
}

function merge2(left = [], right = []) {
    const arr = [];
    let i = 0; 
    let j = 0; 

    console.log("Llamando función merge...", left, right);

    while (i < left.length && j < right.length) {
        console.log("Left:", left[i]);
        console.log("Right:", right[j], "\n");
        
        if (left[i] < right[j]) {
            console.log("Left es menor:", left[i]);
            arr.push(left[i]); 
            i++;
        } else {
            console.log("Right es menor:", right[j]);
            arr.push(right[j]);
            j++;
        }
    }

    console.log("\nLeft:", left);
    console.log("Right:", right);
    console.log("I:", i);
    console.log("J:", j);
    console.log("Arr separado:", arr, "+", left.slice(i), "+", right.slice(j));

    return arr.concat(left.slice(i)).concat(right.slice(j));
}

console.log("Inicio:", nums);
const answer = mergeSort(nums); 
console.log("Final:", answer);
