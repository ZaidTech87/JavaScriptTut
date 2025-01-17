class employee{
    login(){
        console.log("employeee is loged in ")
    }
    logout(){
        console.log("employee is logout")
    }
    requestLeave(x){
        console.log(`employee has  been requested ${x} leaves`)
    }
}
class programmer extends employee{
    requestCofee(m){
        console.log(`programmer has requested ${m} cofee`)
    }
    requestLeave(x){
        super.requestLeave(x)
        console.log("extra leave")

        }

}
let a = new programmer()
a.logout()
a.requestCofee()
a.requestLeave(4)
console.log(a instanceof programmer)
console.log(a instanceof employee)