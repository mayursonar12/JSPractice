// Big Array
const arr = [67,34,45,5,36,98,56,84,43,6,8,3,0,2,87,40,50];

// We want to sort a part of it
// From index 2 to 12 lets say

// First we should write code for only merging two SORTED Arrays
// So lets take another aray for this part of code of merging

const sampleArr = [565, 23, 2, 4, 8, 12, 34, 56, 0, 5, 7, 39, 1, 90];
// The two sorted arrays are from
// Array 1 : Index 2 to 7
// Array 2 : Index 8 to 11

/*
    Merge function to ONLY merge sorted arrays
    inputs: 
        array
        startindex
        midIndex
        endindex
*/
function merge(arr, s, m, e) {
    // We start with 2 pointers at the start index of each array
    // Compare the elements
    // Push the smaller in new array

    let Pa = s; // here common mistake is Pa=arr[s], Pb = arr[m+1];
    let Pb = m+1;
    let C = [];
    
    while(Pa <= m && Pb <= e) {
        if(arr[Pa] < arr[Pb]){
            C.push(arr[Pa]);
            Pa++;
        } else {
            C.push(arr[Pb]);
            Pb++;
        }
    }

    while(Pa<=m){
        C.push(arr[Pa]);
        Pa++;
    }
    while(Pb<=e){
        C.push(arr[Pb]);
        Pb++;
    }
    //console.log(C);

    // Replace the original array with C

    for (let i = 0; i<(e-s+1); i++){
        arr[s+i] = C[i];
    }
    //console.log(arr);

}

merge(sampleArr, 2, 7, 11);

// Now writing MergeSort is simple
// Here its only 3 easy steps
// 1. Find the middle,
// 2. Call mergeSort recursively twice for each part (left and right)
// 3. merge the sorted parts at end

function mergeSort(arr, s, e) {
    // We first try to split the arr into 2
    if (s>=e) return;
    let m = Math.floor((s+e)/2);
    mergeSort(arr, s, m);
    mergeSort(arr, m+1, e);

    merge(arr, s, m, e);
    //console.log(arr);
}

mergeSort(arr, 1, 15);
console.log(arr);

