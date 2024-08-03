const maths={
    a:sum(5,6),
    b:function sub(a,b){
        return b-a
    },
    mul(a,b){
        return (a*b);
    }
}
function sum(a,b){
    return (a+b);
}
console.log(maths.a);
console.log(maths.b(7,10));
console.log(maths.mul(7,6))