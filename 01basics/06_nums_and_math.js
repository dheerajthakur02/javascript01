//---------------------------------NUMBER------------------------------------------------
const score=100
console.log(score)

const balance=new Number(100)
console.log(balance)

//try on web console 
//const num=new Number(100)
//console.log(num)

console.log(balance.toString().length)

console.log(balance.toFixed(2))

let otherNumber=23.896
console.log(otherNumber.toPrecision(3))
// it precise the number into given number 

otherNumber=123.896
// console.log(otherNumber.toPrecision(3))

//----------------------MATHS----------------------------------------------------

console.log(Math)
console.log(Math.abs(7-9))
console.log(Math.round(8.8))
console.log(Math.round(8.4))//// n>=8.5-->9
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))

console.log(Math.sqrt(25))

console.log(Math.min(4,6,7,5))


console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)


const min=10
const max=20
 
console.log(Math.floor(Math.random()* (max-min+1))+min)
