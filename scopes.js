// Task 2.1: Global Scope
let globalVariable = "I am global";

function testFunction() {
    // Task 2.2: Function Scope
    let functionVariable = "I am in function";
    console.log(globalVariable);      // Can access global
    console.log(functionVariable);    // Can access its own
}

if (true) {
    // Task 2.3: Block Scope
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    let a = 2;
    console.log(blockVariable);       // Works here
}

// console.log(blockVariable);        // Will cause error
console.log(notActuallyBlocked);     // Works! (but avoid this)
console.log(a);
// console.log(alsoInBlock);
