let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("value 1");
    },1000)
});
let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Value 2")
    },2000);

});
let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("value 3");
    },3000);
   });
      try{
        console.log(rahri)
    }
    catch(error){
        console.log(error)
    }
    


let promise_all = Promise.race([p1,p2,p3])


promise_all.then(()=>{
    console.log(promise_all)
});
setTimeout(()=>{

    console.log("hacking wifi //")

},5000)
