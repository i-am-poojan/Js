// set can convert array to object

const arr=[1,2,3,4,5,5]
const setarr=new Set(arr) //o(n)
console.log(setarr);
console.log(typeof(setarr));
console.log(setarr.has(4)); //o(1)