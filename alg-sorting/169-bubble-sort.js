// Swap between "i" and "i + 1";

// When shoud i use it? it's only used for educational purposes.
// It's not very efficient.

const nums1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const nums2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//const nums = [99, 4, 29, 2, 1];
// [1, 2, 4, 29, 99] <- result

function bubbleSort(arr) {
    //let counterI = 0; //let counterJ = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        //counterI++;

        for (let j = 0; j < arr.length - 1 - i; j++) {      
            //counterJ++;
            if (arr[j] > arr[j + 1]) { [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] };                
        }

    }

    //console.log("counter 1 - i:", counterI);
    //console.log("counter 1 - j:", counterJ);
    return arr;
}

console.log(bubbleSort(nums1));

function bubbleSort2(arr) {
    //let counterI = 0; //let counterJ = 0;
    
    for (let i = 0; i < arr.length; i++) {
        counterI++;
        
        for (let j = 0; j < arr.length; j++) {        
            counterJ++;
            if (arr[j] > arr[j + 1]) { [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] };            
        }

    }

    //console.log("counter 2 - i:", counterI);
    //console.log("counter 2 - j:", counterJ);
    return arr;
}

//console.log(bubbleSort2(nums2));

