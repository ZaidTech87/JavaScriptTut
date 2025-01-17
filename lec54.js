let promise = new Promise(function(resolve,reject){
    alert("hello")
    resolve(58)
})
console.log("hello buddy")
setTimeout(function(){
    console.log("hello two 2 ssencond")
},2000)

console.log("my name is zaid")
console.log(promise)

//lecture 55

let p1 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am resolved")


    },3000)
})
let p2 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("i am a promise and i am rejected")
        reject(new Error("i am an error"))
    },5000)
})