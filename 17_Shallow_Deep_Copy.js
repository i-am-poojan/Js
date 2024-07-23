let shallowArray=[1,2,3,4,5]
let shallowArray2=shallowArray

let shallowObject={
    firstName:"Poojan",
    lastName:"Patel"
}

let shallowObject2=shallowObject

//here i have one problem when i have push value in shallowarray2 but it is automatically add in shallowarray 
// so we use object.include method and also use spread operator(...) for solve this problem
// it is efficiant for shallow copy
shallowArray2.push(6)
console.log(shallowArray)
console.log(shallowArray2)

//solve problem
let shallowArray3=[]
Object.assign(shallowArray3,shallowArray);
shallowArray3.push(17);
console.log(shallowArray3)

shallowObject2.firstName="Dev";
console.log(shallowObject)
console.log(shallowObject2)


// solve problem
let shallowObject3={...shallowObject}
Object.assign(shallowObject3,shallowObject)

shallowObject3.firstName="Poojan"
console.log(shallowObject3)


// Deep Copy
//Deep Copy problem solve thru JSON.parse Method and JSON.stringify method
let deepArray=[1,2,3,4,[47,48,49]];
let deepArray2=JSON.parse(JSON.stringify(deepArray))
console.log(deepArray2)