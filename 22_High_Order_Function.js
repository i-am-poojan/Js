function a(){
    console.log("a")
}//In function is a function that can accept other functions as arguments
function greet(anotherfunction){
    console.log("I am another function call here")
}

function anotherfunction(){
    console.log("I am another function")
}

const passfunction=anotherfunction()
greet(passfunction)

// In function is return function
function Multiply(num){
    return function multiplywith(x){
        return num*x;
    }
}
const MultiplyCall=Multiply(5);
console.log(MultiplyCall(15))