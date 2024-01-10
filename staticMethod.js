// static properties use than not required to put this key word
// static properties and method you can use outside of class with create instance
class user{
    constructor(fname,lname,salary){
        this.firstname=fname;
        this.lastname=lname;
        this.salary=salary;
    }
    static getdata(){
        return "Hi guys"
    }
  
}

class superuser extends user{
    constructor(){
        super("Pranav","Patel",10000);
        this.myfriend=true
    }
}

console.log(user.getdata());
console.log(superuser.getdata());