//IIFE Immediatly invoked function expressoin
let a =()=>{
return new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve("tan")
    },4000)
})
}
(async()=>{
    let c =await  a()
    console.log(c)
    let d =await  a()
    console.log(d)
    let e = await a()
    console.log(e)
   
})()


