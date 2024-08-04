const color=['pink','yellow','red','green']
let [pink,...another]=color
console.log(pink)
console.log(another)

const user={
    name:"Poojan",
    age:21,
    address:{
        city:'ahmedabad',
        state:"Gujarat"
    }
}

//sort Method of access city name
let {address:{city:changeCity}}=user
console.log(changeCity)

// long Method
const {name,...afterName}=user;
console.log(name)
console.log(afterName)

const {address,...afteraddress}=user;
console.log(afteraddress)
console.log(address)

const {city,...cityRemove}=address
console.log(city)
console.log(cityRemove)

const finaloutput={...afteraddress,address:{...cityRemove}}
console.log(finaloutput)