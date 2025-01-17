
// class Books{
//     math(){
//         console.log("this is math book")

//     }
//     science(){
//         console.log("this is science book")
//     }
//     english(){
//         console.log("tis os english book")
//     }
// }
// let s1 = new Books;
// let s2 = new Books;
// s1.science()
// s2.science()
class Railway{
    //using constructor
    constructor(name,trainno){
        console.log("constructor called//..")
        this.name=name
        this.trainno=trainno
    }
    submit(){
        alert(this.name+": your ticket is submit for train :"+this.trainno)
    }
    cancel(){
        alert(this.name+": your ticket is cancel: "+this.trainno)
    }
    // fill(name,trainno){
    //   this.name=name
    //     this.trainno=trainno
    // }
}

let zaid = new Railway("rabish",859);
let harry = new Railway("fatma",748);
let hadi = new Railway();
// zaid.fill("zaid",25143)
// harry.fill("ahad",74858)
zaid.submit()
harry.cancel()

