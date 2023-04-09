function solve (A, B) {
    if (A.length == 0 && B.length == 0){
        return [];
    } else if (A.length == 0 && B.length > 0) return B;
    else if (A.length > 0 && B.length == 0) return A;

    let iPA = 0;
    let iPB = 0;
    let C = [];
    let lengthOfLoop = (A.length > B.length) ? A.length : B.length;
    while (iPA < A.length || iPB < B.length) {
        if (A[iPA] == undefined) {
            C.push(B[iPB]);
            iPB++;
        } else if (B[iPB] == undefined) {
            C.push(A[iPA]);
            iPA++;
        }
        else {
            if(A[iPA] >= B[iPB]) {
                C.push(B[iPB]);
                iPB++;
            } else {
                C.push(A[iPA]);
                iPA++;
            } 
        }
    }

    // let remainingArray = [];
    // if (A.length > B.length) remainingArray = A; 
    // else if (A.length < B.length) remainingArray = B;

    // if (remainingArray.length){
    //     for(let i = lengthOfLoop; i < remainingArray.length; i++){
    //         C.push(remainingArray[i]);
    //     }
    // }
    return C;
}

//param A : array of integers
//param B : integer
//return an integer
function kthsmallest(A, B){
    // Here we use selection sort technique
    // For every pass, we wll find smallest element and swap its position at the start
    
    for (let l =0; l < B; l++) {
        let minVal = A[l];
        let minIndex = l;
        for (let i = l; i<A.length; i++) {
            if (A[i] < minVal) {
                minVal = A[i];
                minIndex = i;
            }
        }
        let temp = A[l];
        A[l] = A[minIndex];
        A[minIndex] = temp;
        
    }
    console.log(A[B-1]);
}
kthsmallest([ 43, 31, 68, 21, 25, 4, 36, 76, 6, 25, 7 ],3)

solve([-4,-3, 0], [2]);


