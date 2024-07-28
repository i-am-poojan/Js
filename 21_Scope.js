'use strict';

//Global Scope
// debugger
var x=14;
let y=50;
const z=20;

// we can also access var variable thru window object like
console.log(window.x)//how prevenet window access we use "use Strict" keyword in top of script

//function scope
//in function scope you can access global scope variable
function sum(y,z){
    console.log(y+z)
}
sum(y,z)

//Scipt scope
//when we declare variable thru let and const type than it is include as script scope

//When we declare between {}(Curly Bracket)
//Block Scope 
{
    let a=5;
    console.log(a)
}
