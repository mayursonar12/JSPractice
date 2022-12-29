// Pattern matching

// Given binary strings A and B
// XOR should be zero
// Find how many cyclic rotation of B give A

import {computeLPSArray} from "./libFunctions.js";
//const computeLPSArray = require('libFunctions');

let A = "1001";
let B = "0011";

// This is patern matching
// We will create LPS array

// our pattern is A
// our text string is B
// We need all cyclic rotations possible combinations
// We take B + B (minus the last char because it will repeat the B if we do not remove)
// This Bdash will have every combination of cyclic generated string of A
// So then we will find how many of those combinations match the given string A

let Bdash = B.concat(B.slice(0,-1));
console.log(Bdash);

// We create a final string for our LPS array
// S = pattern to match (A) + @ + text (Bdash)
let S = A + "@" + Bdash;
console.log(S);

// Geenarate LPS
let lps = [];
computeLPSArray(A, S.length, lps)

console.log(lps);




