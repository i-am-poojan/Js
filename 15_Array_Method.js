let evenNumber=[0,2,4,6,8,10]

// push
evenNumber.push(12)
console.log(evenNumber)

//pop 
evenNumber.pop()
console.log(evenNumber)

//shift
evenNumber.shift()
console.log(evenNumber)

//unshift
evenNumber.unshift(12)
console.log(evenNumber)

//concat
//It is immutable
let oddNumber=[1,3,5,7,9]
let squareNumber=[4,9,16,25]
console.log(oddNumber.concat(evenNumber))
console.log(oddNumber.concat(evenNumber,squareNumber))

// indexof
// If value is in array than return index of value else return -1
console.log(evenNumber.indexOf(8))

//include
//If value is in array than return true else return false
console.log(evenNumber.includes(12))

//reverse
console.log(evenNumber.reverse())


//sort
let sortingName=["Poojan","Ankit","Darsh","Bhavik"]
console.log(sortingName.sort())
console.log(evenNumber.sort())

//slice
//slice is working as immutable mean it can not change directly main value of array
const fruitName=['Apple','Pineapple','Mango','Banana']
console.log(fruitName.slice(1,3))
console.log(fruitName)

// splice
// splice is working as mutable mean it can change directly main value of array
console.log(fruitName.splice(1,2,"Graphe","Banu"))
console.log(fruitName)