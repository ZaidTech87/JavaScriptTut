//Chapter 11 
//Sol -> 1:
class Number{
    constructor(real,complex){
        this.real=real
        this.complex=complex
    }
    add(num){
        this.real=this.real+num.real
        this.complex=this.complex+num.complex
    }
   
}
let c=new Number(3,4)
let d= new Number(5,6)
c.add(d)
console.log(`${c.real} + ${c.complex}i`)

//sol -> 3;

class Human{
    constructor(name,food){
        this.name=name
        this.food=food
    }
    walk(){
        console.log("human is walking")
    }
}
class Student extends Human{
    walk(){
        console.log(this.name+ " student is walking ")
    }
}
let a = new Student("raju","apple")
a.walk() 
console.log(a instanceof Student)
