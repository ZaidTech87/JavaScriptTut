let a = {
    name:"zaid",
    language:"javascripdt",
    // run:() => {
    //     alert("self run")
    // }
    

}
console.log(a)
let p={
    name2:"harry",
    run:()=>{
        alert("run")
    }
}
p.___proto__={
    name3:"sharukh"
}

a.__proto__=p
// a.run()
console.log(a.name3)