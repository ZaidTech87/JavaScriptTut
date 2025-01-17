//destructuring and spread syntaxk
let arr = [3,5,1,6,2,4,5]
// let[a, ,b,...rest] =arr
// console.log(a,b,rest)

//using spread function
// let obj1={...arr}
// console.log(obj1)

function sum(v1,v2,v3,v4){
    return v1+v2+v3+v4
}
console.log(sum(...arr))

