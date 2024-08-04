function add(a, b) {
    console.log(arguments);
    let argumentsValues = Object.values(arguments);
    const sum = argumentsValues.reduce((accumulator, currentValue) => {
      console.log(accumulator);
      return accumulator + currentValue;
    }, 0);
    console.log(sum);
  }
  add(1, 2, 3, 4, 5);
  
  function makeArgumentArray() {
    console.log(arguments.length);
    let argumentsArray = [];
    for (let i = 0; i < arguments.length; i++) {
      argumentsArray.push(arguments[i]);
    }
    console.log(argumentsArray);
  }
  makeArgumentArray(1, 2, 3, 4, 5);
  