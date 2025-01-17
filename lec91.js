function saayHell(){
    console.log("hello worlds")
}
saayHell()

const obj={
    name:"zaid",
    work:"full stack devoloper ",
    exp: 1,
    tan:function(){
        let that =this
        setInterval(()=>{
            console.log(this.name)
        },3000)


    }
}
obj.tan()