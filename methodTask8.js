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
    { firstName: "Ethan", lastName: "Taylor", age: 31, gender: "Male" }
  ];
  
  console.log(records);
  
const groupbygender=records.reduce((accumulator, currentValue) => {
  const key=currentValue.gender;
  if(accumulator[key]===undefined){
    accumulator[key]=[]
  }
  accumulator[key].push(currentValue);
  return accumulator;
},{});
console.log(groupbygender);


const age=39;
const calculate=(Math.floor(age/10));
const key=(`${calculate}0-${calculate}9`);

const groupbyage=records.reduce((accumulator, currentValue) => {
    
const calculate=(Math.floor(currentValue.age/10));
const key=(`${calculate}0-${calculate}9`);
    if(accumulator[key]===undefined){
      accumulator[key]=[]
    }
    accumulator[key].push(currentValue);
    return accumulator;
  },{});
  console.log(groupbyage);