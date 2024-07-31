function outer(){
    const a=5;
    const b=10;
    console.log("i am outer")
    function sum(){
        console.log(a+b)
    }
    sum()
}

console.log(outer())