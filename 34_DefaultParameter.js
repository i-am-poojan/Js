function sum(a,b=1){
    return a*b;
}
console.log(sum(4))
console.log(sum(4,5*10))

function rollDie(numberOfSides=6){
    return Math.floor(Math.random()*(numberOfSides)+1)
}
console.log(rollDie())

