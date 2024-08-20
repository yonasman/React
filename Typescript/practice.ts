// declaring data types
let id:number = 5
let isSupported:boolean = true
let a:any = "Hello"
// arrays
let ids:number[] =[1,2,3]
// tuples
let person: [number, string] = [1,"Yon"]
let employees : [number,string][];
employees = [
    [1,"yon"],
    [2,"Job"]
]
// console.log(employees)
// unions
let pid: string | number = 22
// object
// let user:{id:number, name:string}
// user = {
//     id:1,
//     name:"yon"
// } 
type user = {
    id : number,
    name: string
}
let user: user = {
    id:1,
    name: "yon"
}
// type assertion
let cid:any;
// let customerId = <number> cid
let customerId = cid as number
customerId = 2
// functions
function addNum(x:number, y:number):number {
    return x + y
}
// console.log(addNum(1,2))
// void
function log(message: number | string):void {
    console.log(message)
}
// log("hello")
// interfaces
interface userInterface {
    readonly id : number,
    name : string,
    age? : number
}

let user2:userInterface ={
    id : 3,
    name : "Yon",
}

// function interfaces
interface mathFunc {
    (x:number, y:number):number
}
const add:mathFunc = (x:number, y:number):number => x + y 
// console.log(add(1,2))