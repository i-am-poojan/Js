const records = [
  { firstName: "John", lastName: "Doe", age: 30, gender: "Male" },
  { firstName: "Jane", lastName: "Smith", age: 25, gender: "Female" },
  { firstName: "Alice", lastName: "Johnson", age: 35, gender: "Female" },
  { firstName: "Robert", lastName: "Williams", age: 28, gender: "Male" },
  { firstName: "Emily", lastName: "Brown", age: 32, gender: "Female" },
  { firstName: "Michael", lastName: "Davis", age: 40, gender: "Male" },
  { firstName: "Sophia", lastName: "Miller", age: 22, gender: "Female" },
  { firstName: "William", lastName: "Wilson", age: 29, gender: "Male" },
  { firstName: "Olivia", lastName: "Moore", age: 27, gender: "Female" },
  { firstName: "Ethan", lastName: "Taylor", age: 31, gender: "Male" },
];

const sortdata = records.sort((a, b) => {
  return a.age - b.age;
});
console.log(sortdata);

const sortdataFirstname=records.sort((a_Firstname,b_Firstname)=>{
    if(a_Firstname.firstName<b_Firstname.firstName)
    {return -1}
    return 1
})
console.log(sortdataFirstname);