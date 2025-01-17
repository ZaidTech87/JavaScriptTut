const loadScript = async (src)=>{
    return  new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src=src
        script.onload=()=>{
            resolve(src+"Done successfully")
        }
        document.head.append(script)

    })
}
// const main2 =async() =>{
//     console.log(new Date().getMilliseconds())
//     let a= await loadScript("https://cdn.jsdelivr.net/npm/bootsstrap@5.2.2/dist/js/booststrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// main2()




//for q2

let a= loadScript("https://cdn.jsdelivr.net/npm/bootsstrap@5.2.2/dist/js/booststrap.bundle.min.js")
a.then((value)=>{
    console.log(value)
})