//chapter no 5 
//solution 1
let arr=[2,3,4,5,6,7]
let a1=prompt("enter the number:")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//solution 2
let arr2=[2,3,4,5,6,7]
do{
var a2=prompt("enter the number:")
a2=Number.parseInt(a2)
arr2.push(a2)
}while(a2!=0)
console.log(arr2)

//solution 3
let arr3=[4,5,6,20,30,10,7,8,9]
let a=arr3.filter((a)=>{
    return a%10==0
})
console.log(a)

//solution 4
let num2=[1,3,5,7,9,0,8]
let n=num2.map((a)=>{
    return a*a
})
console.log(n)

//solution 5
let arr4=[1,2,3,4,5,6,7,8,9]
const red=arr4.reduce((h1,h2)=>{
    return h1*h2

})
console.log(red)