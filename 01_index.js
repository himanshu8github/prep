// if (true) {
//     let x = 10;   //← x exists only inside this block
// }

// console.log(x);   // x does NOT exist here ❌

//ReferenceError: x is not defined

let b = -1;

if (b < 0) {
    console.log("Value is Positive");   //← CORRECT → Prints message
}

console.log("Value is Positive");   //← CORRECT → Prints message