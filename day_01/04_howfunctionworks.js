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

// In this example, JavaScript first creates the Global Execution Context and allocates memory for the global variables and functions. So x is initially undefined, while a and b are stored as complete functions. During the Execution Phase, x becomes 22, then a() is called and creates its own Function Execution Context with a separate local x, which becomes 10 and prints 10. After a() finishes, its execution context is removed from the Call Stack. Then b() is called, creating another Function Execution Context with its own separate local x, which becomes 90 and prints 90. After b() finishes, the global context continues and console.log(x) prints the global x, which is 22. The important concept is that each function has its own memory/execution context, so the x inside a(), the x inside b(), and the global x are three different variables.

// Output:
// 10
// 90
// 22