let person={
    name:"Poojan Patel",
    age:30,
    city:"New York"
};

// CREATE (Add A new Property)
person={...person,country:"USA"}
console.log(person)

// Read (Access Properties)
const {name,age}=person;
console.log(name)
console.log(age)

// Update (Modify an existing propety)
let personUpdated={...person,city:"Los Angeles"}
console.log(person)
console.log(personUpdated)

// Delete 
const {city,...cityDeleted}=personUpdated
console.log(city)
console.log(cityDeleted)
console.log(person)

// You can not pass parameter as object
function sum(...value){
    console.log(value)
}
const value=[1,2,3,4,5]


// for inner Object
// You can not pass parameter as object
// const obj={
//     name:"PooJan Patel",
//     age:30,
//     salaryDetail:{
//         currentSalary:40000,
//         ctc:500000,
//         incrementRate:10,
//     }
// }

// // Create 
// const Create={...obj,location:"Ahemedabad"}
// console.log(Create)

// const salaryDetailUpdate={...obj,...obj.salaryDetail,incomeTax:40000}
// console.log(salaryDetailUpdate)

// //Read
// const {name}=Create
// console.log(name)

// const {salaryDetail:{ctc,...remainingSalarydetail}}=Create
// console.log(ctc)

// //Delete
// const {salaryDetail:{incrementRate,...remainingDetailDelete}}=Create
// console.log(incrementRate)
// console.log(remainingDetailDelete)

// const afterDeteted={
//     ...Create,
//     salaryDetail:remainingDetailDelete
// }
// console.log(afterDeteted)