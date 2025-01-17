class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    jump(){
    console.log(this.name+"  this is dog")
    }
    hang(){
        console.log(this.color+"  this is hanging properties")
    }
}
class Monckey extends Animal{
    // constructor(walk,run){
    //     this.walk=walk
    //     this.run=run
    // }
    shout(){
        console.log("this tis shouted muna")
    }
}
 let zaid = new Animal("sharam",78);
 let na = new Monckey("es","no");
//  na.hang()
// zaid.shout()
zaid.hang() 
na.hang()                                                                                                              