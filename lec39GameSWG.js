let user=prompt("Enter S,W,and G")
let cpuI =Math.random()*3
let cpu=["S","W","G"][cpuI]
const match =(cpu,user)=>{
    if(cp==user){
        return 0;
    }
    else if(cpu=="S" && user=="G"){
        return user
    }
    else if(cpu=="W" && user=="G"){
        return cpu;
    }
    else if(cpu=="G" && user=="W"){
        return user;
    }
    else if(cpu=="G" && user=="S"){
        return cpu;
    }
}
let result=match(cpu,user);
console.log("the winner is : ",result)