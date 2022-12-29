//import { isPrime } from "./libFunctions";

// var buttonDiv = document.getElementById("divID");

// buttonDiv.append(" Written before settimeout function");
// setTimeout(() => {
//     buttonDiv.append("   Written INSIDE settimeout function");
// }, 7000);

// buttonDiv.append("   Written after settimeout function");

var checkbutton = document.getElementById("chkbtn");
checkbutton.onclick = onClickFunction;

// To check if a number is Prime or not
function isPrime(num) {
    let isPrime = true;
    if(num == 0 || num == 1) isPrime = false;
    for (let i = 2; i*i <= num; i++){
        if (num % i == 0) isPrime = false;
    }
    return isPrime;
}

function onClickFunction(params) {
    // Here we will check for prime number
    var ISPrime = isPrime(4);
    //if(ISPrime) {
        var buttonDiv = document.getElementById("outputID");

        buttonDiv.append(" Number is Prime: " + ISPrime);
    //}
}

var test = 1;


