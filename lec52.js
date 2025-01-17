//callback
function loadScript(src,callback){
     var script = document.createElement("script");
     script.src=src;
     script.onload=function(){
        console.log("Loaded script with SRC: "+src)
        callback(src);
     }
     document.body.appendChild(script);
    }
function hello(src){
    alert("hello world"+src);
}
function goodmorning(src){
    alert("good morning"+src)
}
loadScript("https://www.youtube.com/watch?v=IJlGpI6l92U&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR")