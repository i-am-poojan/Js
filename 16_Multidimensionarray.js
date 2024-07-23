const insideArray=[1,2,3,4,["Poojan",'Dev',"Kushal"]]
console.log(insideArray)
console.log(insideArray[4][2])

const tictactoe=[
    ['x',null,null],
    [null,null,'0'],
    ['0',null,'x']
]
console.log(tictactoe)

console.log(insideArray.flat())
console.log(tictactoe.flat())

const multipleInsider=[1,2,3,[4,5,[8,9,7]]]
console.log(multipleInsider.flat(2))