//const tinderUser=new Object()   // singleton object

const tinderUser={}    // non-singleton non-object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const reugularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Dheeraj",
            lastName:"Thakur"
        }
    }
}

console.log(reugularUser.fullName.userFullName.firstName)

const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2} // insert obj1 and obj2 inn obj3
// console.log(obj3)

// const obj3=Object.assign({},obj1,obj2,obj4) // best practice to do
// console.log(obj3)

//-----------------MDN web docs on assign-------------------
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true
//-----------------------------***----------------------------------


// concatation using the spread operator

const obj3={...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//----------------------------***----------------
// object destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course  // object destructuring
console.log(instructor);


//-----------JSON-------------
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API in form of Arrays
// [
//     {},
//     {},
//     {}
// ]
