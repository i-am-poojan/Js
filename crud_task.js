const user = {
    id: 1,
    name: "Yagnesh",
    age: 36,
    gender: "male"
}


const user1 = {
    profession: "teacher",
    AADHAR: "1232134234234324"
}
console.log(user);
console.log(user1);
// const combo=Object.assign({},user,user1)
const combo={...user,...user1}
console.log(combo);


const {AADHAR , ...abc}=combo
console.log(abc);
