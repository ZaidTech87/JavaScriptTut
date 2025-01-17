let num=[3,4,5,6,7,7,8]
num.forEach((element)=>{
    console.log(element/2)

})
//functiion Array.from use for making string to array

let name='zaid'
let arr=Array.from(name)
console.log(arr)

//for of loop
for(let i of num){
    console.log(i)
}

//for in loop
console.log("for in loo")
for(let i in num){
    console.log(num[i])
}
