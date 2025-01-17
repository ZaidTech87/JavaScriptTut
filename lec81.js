class Animal{
    constructor(name){
        this.name =Animal.captalization(name);

    }
    walk(){
        console.log("Animal name is "+this.name  +" that is walking")
    }
    static captalization(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    }
}
let j = new Animal("jack");
j.walk()