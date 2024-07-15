// array

const  myArr=[0,1,2,3,4,5]
const myHeros=["spiderman","IronMan"]

// console.log(myHeros)

const myArr2=new Array(1,2,3,4,5,6,7)
//console.log(myArr2)

//Array methods

//myArr2.push(8)
//myArr2.pop()
// console.log(myArr2)

//myArr2.unshift(5)  // took the elment in the first , push ka oolta ki tarah kaam krta hai
// console.log(myArr2)

// myArr2.shift() /// pop() from the begining
// console.log(myArr2)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

 const newArr=myArr2.join() // convert into the strings
 console.log(myArr2)
 console.log(newArr)

console.log(typeof(myArr2)) // Object
console.log(typeof(newArr))  // String


slice, splice

console.log("A ", myArr); // before slice operation 

const myn1 = myArr.slice(1, 3) // here index 3 is exclusive

console.log(myn1);
console.log("B ", myArr); // after splice operation

const myn2 = myArr.splice(1, 3) 
// splice operation cut {cut means elements are deleted from original array} the elements from index 1 to index 3 here index 3 is inclusive 
console.log("C ", myArr);
console.log(myn2);