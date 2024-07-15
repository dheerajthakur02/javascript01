//singleton
// object.create // made by constructor

//object literals 


const mySym= Symbol("key1")
const JSuser={
    name:"hitesh",// syestem take it by default "name"
    "full name":"Hitesh Chaudhary",
    age:21,
    //mySym:"mykey1"// here data typeof(mySum)--> string not Symbol so to use like a symbol 
    [mySym]:"mykey1",// typeof(mySym)--> Symbol
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Tuesday"]
}

//console.log(JSuser.email)
//console.log(JSuser["email"])// another method to access

//console.log(JSuser.full name) // can't be taken in these case 
// so here the only way to acces is
//   -->> console.log(JSuser["full name"])


 JSuser.email="hitesh@chatgpt.com"

 //Object.freeze(JSuser)// to user freeze for further changes in object JSuser

 JSuser.email="hitesh@microsoft.com"// here no changes occurs because of freeze


 // in javascript functions can be treated as a variable

 JSuser.greeting=function(){
    console.log("Hello JS users")
 }

 console.log(JSuser.greeting)// undefined because it return refrence of the function
// function execute nhi hua haii in JSuser.greeting
 
console.log(JSuser.greeting())


JSuser.greetingTwo=function(){
    console.log(`Hello JS users ${this.name}`)
 }

 console.log(JSuser.greeting())
 console.log(JSuser.greetingTwo())
