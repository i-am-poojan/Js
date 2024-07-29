function mainFunction(callbackFunction){
    console.log("Where it is called")
    callbackFunction()
}

function callbackFunction(){
    console.log("Call back function")
}

mainFunction(callbackFunction)
console.log(mainFunction(callbackFunction))