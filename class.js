// Encaptualation > abstraction > inheritance > polymorphism 
// Encaptualation > abstraction > inheritance > polymorphism 

// Encaptualation :- it is required for store same functionality (familier) data 
// what can do constructer?=>when we require data use out of class when create instance
// abstraction :- apde jetlu batavvanu hoy user ne atlu joi sake

class user{
    constructor(fname,lname,salary){
        this.firstname=fname;
        this.lastname=lname;
        this.salary=salary;
    }
    getinfo(){
        console.log(this.#getsalary());
    }
    #getsalary(){
        return this.salary;
    }
    
}

class superuser extends user{
    constructor(){
        super("Pranav","Patel",10000);
        this.myfriend=true
    }
}
const s1=new superuser()
console.log(s1);

const u1=new user("Poojan","Patel",1000)
console.log(u1.getinfo());

console.log(u1);
console.log("hi");