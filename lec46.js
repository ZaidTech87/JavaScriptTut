
//alert poop up bar bar girega
setInterval(function(){
    alert("hello");
}, 2000)
 document.write("ye hai duniya yha kitne ahle wafa be wafa ho gye dekhte dekhte")

 //execution ke 5 sec bad input pop girega but only aik bar 

 settimeout(function(){
    prompt("heel")
 },5000)

 //program 
 const sum=(a,b,c)=>{
    console.log("yes i am runing"+(a+b+c))
    alert(a+b+c)
 }
 setTimeout(sum,5000,1,3,5)


//set interval implementation using funation call
 const test=(a,b)=>{
    alert("go from here its dangerous"+(a+b))
 }
 setInterval(test,4000,5,8)