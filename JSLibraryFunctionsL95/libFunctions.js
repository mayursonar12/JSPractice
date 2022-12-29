

/**
 * LPS array generation code
 * KMP method
 */

//Javascript program for implementation of KMP pattern
// searching algorithm

function computeLPSArray(pat, M, lps)
{
    // length of the previous longest prefix suffix
    var len = 0;
    var i = 1;
    lps[0] = 0; // lps[0] is always 0

    // the loop calculates lps[i] for i = 1 to M-1
    while (i < M) {
        if (pat.charAt(i) == pat.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        }
        else // (pat[i] != pat[len])
        {
            // This is tricky. Consider the example.
            // AAACAAAA and i = 7. The idea is similar
            // to search step.
            if (len != 0) {
                len = lps[len - 1];

                // Also, note that we do not increment
                // i here
            }
            else // if (len == 0)
            {
                lps[i] = len;
                i++;
            }
        }
    }
}

// To check if a number is Prime or not
function isPrime(num) {
    let isPrime = true;
    if(num == 0 || num == 1) isPrime = false;
    for (let i = 2; i*i <= num; i++){
        if (num % i == 0) isPrime = false;
    }
    return isPrime;
}

// Create all 'PROGRESSIVE' subsequnces for each entry of subArray
// Note: This will create only progressive subsequences
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

export {computeLPSArray, isPrime, findAllSubarray};
