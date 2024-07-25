// function declaration or named function
function namedFunction(){
    console.log("I am Named function")
}

console.log(namedFunction()) //It is return undefined because i am not return any value


//Function with pass two parameter & Return value also
function sumFunction(a,b)
{
    return (a+b);
}
console.log(sumFunction(4,5))

//Function Expression

let substractionFunction=function (c,d){
    return (c-d);
}
console.log(substractionFunction(150,80));
