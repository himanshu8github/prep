var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
console.log(n);
console.log(square);
console.log(square2);
console.log(square4);

// JavaScript Execution Context

// When JavaScript starts executing this file, it creates a Global Execution Context (GEC).

// You can visualize it as:

// ┌─────────────────────────────────────┐
// │      GLOBAL EXECUTION CONTEXT       │
// ├──────────────────┬──────────────────┤
// │      MEMORY      │       CODE       │
// │                  │                  │
// │                  │                  │
// └──────────────────┴──────────────────┘

// The execution context has two major phases:

//           Execution Context
//                  │
//         ┌────────┴────────┐
//         ↓                 ↓
//  Creation Phase      Execution Phase


// Memory is conceptually prepared like this:

// GLOBAL MEMORY

// n       → undefined

// square  → function square(num) {
//              var ans = num * num;
//              return ans;
//          }

// square2 → undefined

// square4 → undefined

// Final Global Memory

// At the end:

// ┌────────────────────────────┐
// │       GLOBAL MEMORY        │
// ├────────────────────────────┤
// │ n       → 2                │
// │ square  → function         │
// │ square2 → 4                │
// │ square4 → 16               │
// └────────────────────────────┘

// Execution Context is the environment created by JavaScript to execute code. It has Memory and Code; first the Creation Phase prepares memory, then the Execution Phase executes the code line by line.

// And when a function is called:

// A new Function Execution Context is created, executed, and then removed after the function returns.

// when an Execution Context is created, it is pushed onto the Call Stack.
// The Call Stack maintains the order in which Execution Contexts are executed.

// And it follows LIFO — Last In, First Out.


// Execution Context created
//           ↓
//    Push onto Call Stack
//           ↓
//      Execute code
//           ↓
//    Context finishes
//           ↓
//  Pop from Call Stack