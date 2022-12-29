
function exactlyTwoPrimeFactors(A) {
    let luckyNumCount = 0;
    if (A>6) {
        luckyNumCount++;
        //A.forEach( num => {
        for (let num = 7; num <= A; num++) {
            // For each number we have to calculate the number of factors
            var primeFactorCount = 0;
            // Here is function to calculate number of factors				
                
                for (let i = 2; i*i <= num; i++){
                    //let isIPrime = true;
                    // Check if i is factor of num
                    if(num % i == 0){
                        let anotherFactor = num/i;
                        
                        // We now need to check if i is Prime
                        console.log("Num: "+num+ " factor1: "+ i + " factor2 :"+anotherFactor);
                        if(isPrime(i)) primeFactorCount++;
                        if(isPrime(anotherFactor) && (i!=anotherFactor)) primeFactorCount++;
                        //if(i == anotherFactor) primeFactorCount--;
                        
                    }			
                    //if (i*i == num) isPerfectSquare = true;
                }
                //let finalCount = count*2;
                //if (isPerfectSquare) finalCount = finalCount - 1;
                if (primeFactorCount == 2) luckyNumCount++;
                console.log("lucky number count: "+luckyNumCount);
                //returnArray.push(finalCount);
            
        }
    } else if (A == 6) luckyNumCount = 1;

    return luckyNumCount;
}
function isPrime(num) {
    let isPrime = true;
    if(num == 0 || num == 1) isPrime = false;
    for (let i = 2; i*i <= num; i++){
        if (num % i == 0) isPrime = false;
    }
    return isPrime;
}
exactlyTwoPrimeFactors(40);


function primeSubsequence(A) {
    // Check through array A
    // if any number is Prime, we all numbers after that till we reach non-prime.
    // This gives us our subset.
    // Then we create all subarrays of this subset

    let startIndex = 0, endIndex=0;
    let subArrayList = [];
    let isPrimeSubSequenceInProgress = false;
    for (let i = 0; i<A.length; i++) {

        if (isPrime(A[i])) {
            if(!isPrimeSubSequenceInProgress) {
                startIndex = i;
                isPrimeSubSequenceInProgress = true;
            }
        } else {
            if(isPrimeSubSequenceInProgress) {
                endIndex = i-1;
                isPrimeSubSequenceInProgress = false;
                let sa = A.slice(startIndex,endIndex+1);
                subArrayList.push(sa);
            }
        }
    }
    // Handle last value case if prime
    if(isPrimeSubSequenceInProgress) {
        endIndex = A.length-1;
        isPrimeSubSequenceInProgress = false;
        let sa = A.slice(startIndex,endIndex+1);
        subArrayList.push(sa);
    }
    console.log(subArrayList);

    let finalListOfAllSubSequences = [];
    // For each entry we find the subArrays and add to main list
    for(let i = 0; i<subArrayList.length; i++){
        let possibleSubSequences = findAllSubarray(subArrayList[i]);
        finalListOfAllSubSequences.push(...possibleSubSequences);
    }
    console.log(finalListOfAllSubSequences);
}


// Create all subsequnces for each entry of subArray
function findAllSubarray(arr){
    let list = [];
    for(let L = 0; L <= arr.length - 1; L++){
        for(let R = L; R < arr.length; R++){
            let sub = [];
            for(let i = L; i <= R; i++){
                sub.push(arr[i]);
            }
            list.push(sub);
        }
    }
    return list;
  }

  //let subArrays = primeSubsequence([9,4,9,1,5]);
  let subArrays = primeSubsequence([9,9,3,6,7,5]);


