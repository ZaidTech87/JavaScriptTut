let num=[3,4,6,7,8]
//map method
let a=num.map((value, index, array)=>{
console.log(value,index,array)
    return value+index;
})
console.log(a)

//array filter method
console.log("filter using")
let arr2=[4,5,7,8,9,12,12,31,34]
let a2=arr2.filter((a)=>{
    return a<10;
})
console.log(a2);
//reduse method

console.log("reduse method")
let arr3=[3,5,6,7,8,9,1]
const reduce_func=(h1,h2)=>{
    return h1+h2
}
let newarr3=arr3.reduce(reduce_func)
console.log(newarr3)

