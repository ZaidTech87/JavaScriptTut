function init(){
    var name = 'Mozilla';
    console.log("xyz")
    function displayName(){
        console.log(name);
    }
    name='harry'
    return displayName
}
let c= init()
c()

function x(){
    let a=1;
    console.log(a)
    function y(){
        a=2;
        console.log(a)
        function z(){
            a=3;
            console.log(a)
        }
       
    
    }
    return y

}
let a =x()
a()
let m=x()
m()