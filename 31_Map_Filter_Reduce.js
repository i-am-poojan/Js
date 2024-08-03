const months=['january','february','march','april','May']

// Map method
const mapMethod=months.map(x=>{
    return x.toUpperCase();
})
console.log(mapMethod)

const mapMethodIndex=months.map((x,index)=>{
    return (`${index+1}:${x}`);
})
console.log(mapMethodIndex)

const mapMethodIndexArray=months.map((x,index,array)=>{
    return (`${index+1}:${x}:${array}`)
})
console.log(mapMethodIndexArray)

// filter Method
const filterMethod=months.filter(x=>{
    console.log(x.length)
    return (x.length>5)
})
console.log(filterMethod)

const filterMMethod=months.filter(x=>{
    console.log(x.includes('m') || x.includes('M'))
    x.toLowerCase()
    // return x.includes('m') || x.includes('M'); 
    return x.toLowerCase().includes('m')
})
console.log(filterMMethod)


// Task 1
const taskData=[
    {
        name:"Poojan",
        age:21
    },
    {
        name:"Dev",
        age:17
    },
    {
        name:"Anurag",
        age:18
    },
    {
        name:"Pratham",
        age:16
    },
    {
        name:"Aditya",
        age:14
    }
]

const findAdult=taskData.filter(x=>{
    console.log(x.age>=18)
    return x.age>=18
})
console.log(findAdult)

// what is chaining array methods 
const getName=findAdult.map(x=>{
    return x.name;
})
console.log(getName)

const AStartName=getName.filter(x=>{
    return x.includes('A')
})
console.log(AStartName)

// reduce Method 
const nums=[1,1,2,1,1,1]

console.log(nums.reduce((accumulator,currentvalue)=>{
    console.log(accumulator+currentvalue)
    return accumulator+currentvalue
    },5))