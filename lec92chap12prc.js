//soludtion 1/3
function b(text ,n=2){
   return new Promise((resolve,reject)=> {
   setInterval(()=>{
    resolve(text)
},1000*n)
   })
}
 (async()=>{
    let a = await b ("i am resolve after 2se",2)
    console.log(a)
    let c= await b("ia ma resolve after 3sec",3)
    console.log(c)
 })()

 //sol 2
 //using spread syntax
 let arr = [2,4,5,6]

 function avg(a1,a2,a3,a4){
    return a1+a2+a3+a4/4;
 }
 console.log(avg(...arr))


 //sol 4 
 const simpleInterest=(p,r,t)=>{
    return p*r*t/100;
 }
 console.log(simpleInterest(5000,5,2))