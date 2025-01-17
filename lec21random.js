
let r =Math.random()*100;
r=parseInt(r)
while(r!==a){
var a=prompt("guess the number")
if(a==r){
    console.log("matched")
}
else if(a>r){
    console.log("your guess number is greater than random number")

}

else{
    console.log("your guess number is less thwn the random number")
}
}
