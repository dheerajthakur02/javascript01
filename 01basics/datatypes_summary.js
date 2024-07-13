//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    //console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//------------------------------------------------------------------------------

// stack(primitve) and heap(non-primitive)

let myYouTubeName="watchBinge"

let anothername="letsWatch"

console.log(myYouTubeName)
/// it will print- > watchBinge because copy bnta hai primitive data type 
console.log(anothername)

let userOne={
    email: "abc@google.com",
    upi:"user@ybl"
}

let userTwo= userOne
userTwo.email="xyz@google.com"


console.log(userOne.email)
/* This will not print abc@google.com, this will print xyz@google.com 
 Because refrence is passed to userTwo so when we assigned in userTwo.email="xyz@google.com" then it also assigned in
 email because refrence is passed (refrence is passed in case non-primitive data type)
*/
console.log(userTwo.email)