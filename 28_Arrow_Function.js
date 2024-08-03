console.log(square(5));

function square(num){
    return num*num
}

// Arrow function
//console.log(mul(5,7)) // you can not use function befor initialization
// Explicit way declare
const mul=(a,b)=>{
    return a*b;
    
}
console.log(mul(5,7))

// implicit way declare
const sub=(a,b)=>(b-a);
console.log(sub(7,5))

// setTimeout Function is anonymous and arrow function