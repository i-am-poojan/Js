const user = {
    firstName: "Poojan",
    lastName: "Patel",
    profession: "Computer engineer",
    getInfo: function () {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.profession}`;
    }
};

const sen = `My name is ${user.firstName} ${user.lastName} and I am ${user.profession}`;
console.log(sen);

const sum = function(a, b) {
    return a + b;
};
console.log(sum(4, 5)); 

console.log(user.getInfo());
