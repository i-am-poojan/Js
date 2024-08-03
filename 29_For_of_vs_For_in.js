const fruits = ["banana", "mango", "graphes"];
// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for (const forOf of fruits) {
  console.log(forOf);
}

const person = {
  firstName: "Poojan",
  surName: "Patel",
  age: "21",
};

for (const key in person) {
  console.log(key, ":", person[key]);
}

// keys
const personKeys = Object.keys(person);
console.log(personKeys);
for (const keyList of personKeys) {
  console.log(person[keyList]);
}

const personValues = Object.values(person);
console.log(personValues);

const personEntries = Object.entries(person);
console.log(personEntries);
console.log(personEntries.flat())
console.log(personEntries[0][0])
console.log(personEntries[0][0]+":"+personEntries[0][1])