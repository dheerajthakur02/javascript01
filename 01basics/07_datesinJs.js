// Dates
console.log(new Date)

let MyDate=new Date
console.log(MyDate)
 console.log(MyDate.toString())
console.log(MyDate.toDateString())
console.log(MyDate.toLocaleDateString())
console.log(MyDate.toDateString())
console.log(typeof(MyDate))

let myCreatedDate=new Date(2024,1,17)
// let myCreatedDate=new Date(2024,1,17,4,3)
// let myCreatedDate=new Date("2024-02-17")
// let myCreatedDate=new Date("02-17-2024")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

new Date().toLocaleString("default",{
    weekday:"long"
})