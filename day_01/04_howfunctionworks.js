var x=22;
a();
b();
  console.log(x);


function a(){
    var x = 10;
  console.log(x);
}


function b(){
    var x = 90;
    console.log(x);
}

// Every time a function is called, a new Function Execution Context is 
// created and pushed onto the Call Stack. That context has its own memory
//  for local variables. When the function finishes, its Execution Context is
//  popped from the Call Stack, 
// and execution returns to the previous context.