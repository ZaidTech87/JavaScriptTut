let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resoleve after 2 second")
        resolve(56)
    },3000)
})
p1.then((value)=>{
    console.log(value)
})
p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        resolve("promise 2")
    })
    return p2
}).then((value)=>{
    console.log("we are done")
})
// let key=prompt("enter key ")
// let val=prompt("enter value")
// localStorage.setItem(key,value)

