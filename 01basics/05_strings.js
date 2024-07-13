const naam="Dheeraj"
const repoCount=50

console.log("Hey my name is "+naam+" and i have "+repoCount+" repos")
// This is the old sytle

console.log(`Hey my name is ${naam} and i have ${repoCount} repos`)
//This is new style of writing strings


const gameName=new String("hiteshscc")
console.log(gameName)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(5))
console.log(gameName.indexOf("t"))


// To this in chrome console
// step1-> const gameName=new String("hiteshscc") it will give u undefined but dont worry to step 2
// step2-> gameName
// after that look on the prototype


const newString= gameName.substring(0,4);
console.log(newString)

const anotherString= gameName.slice(0,4)
console.log(anotherString)
// slice also can negative but substring cant't take negative values

const newStringOne="    Dheeraj    "
console.log(newStringOne.trim())// trim the extra spaces 


const url="https://www.dheeraj%20thakur.com"

console.log(url.replace("%20","-"))
/// first agrugment that is %20 is for finding which thing you wanna repace and second with whom you wanna replace

console.log(url.includes("dheeraj"))// to check whether the string contain that keyword or not

const strToBeSplit="hey-this-is-dheeraj-thakur"
console.log(strToBeSplit.split("-"))