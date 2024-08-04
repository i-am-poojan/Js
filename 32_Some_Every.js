const evenNumber=[0,2,4,6,8]
console.log(evenNumber.some((x,index)=>{
    console.log(`${index}:${x}`)
    return x===2
}))

const oddNumber=[1,3,5,7,9]
console.log(oddNumber.every((x,index)=>{
    console.log(`${index}:${x}`)
    return x%2===0
}))