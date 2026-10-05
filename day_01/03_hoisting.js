

console.log(x);
console.log(getName);
getName();

var x = 10;

// function getName(){
//     console.log("hello");
// };

var getName = () => {
        console.log("hello");

}

// In this example, during the Creation Phase, JavaScript creates the Global Execution Context and allocates memory for the var variables. So x and getName are initially assigned undefined. Then JavaScript enters the Execution Phase and runs the code line by line. console.log(x) prints undefined, and console.log(getName) also prints undefined. When getName() is called, the arrow function has not been assigned to getName yet because its assignment comes later in the code. Therefore, JavaScript is effectively trying to call undefined as a function, which causes TypeError: getName is not a function. The arrow function is assigned to getName only when execution reaches var getName = () => {...}.