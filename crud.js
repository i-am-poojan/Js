// Mutable technique mean main object value will be change
const obj={
    a:1,
    b:2,
    c:3
}
const obj1={
    d:4,
    e:5,
    f:6,
}
// update
obj.c=5;

// delete
delete obj.c;

// concate
console.log(Object.assign(obj,obj1));

//dot notation 
console.log(obj.a + obj.b + obj.c);

// function notation
console.log(obj["a"]+obj["b"]+obj["c"]);

// destrucre notation
const {a:a1,b,c}=obj
console.log(a1+b+c);

// immutable technique never change main object value
const obj2={
    1:"a",
    2:"d",
    3:"c"
}

const obj3={
    4:"d",
    5:"e"
}

const oldway=Object.assign({},obj2,obj3)
console.log(oldway);

// const newobj={obj3,obj2}
const newobj={6:'f',...obj3,...obj2,3:"g"}
console.log(newobj);

const obj5 = {
    a: 1,
    b: 2,
    c: 3
};

console.log(obj5);
const {c:c1,...abc} = obj5;
console.log(obj5);
console.log(abc);

// How to change in nested object
const obj6={
    a:1,
    b:2,
    c:{
        d:4,
        e:5,
        g:{
            f:6
        }
    }
}

// New data add in c and after add in g
const newobj7={...obj6,c:{...obj6.c,h:7}}
console.log(newobj);

// delete data f:6
const {c,...obj}=newobj
const {g,...obj1}=c;

console.log(g);
console.log(obj1);
console.log(c);
console.log(obj);

