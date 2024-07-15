const marvel_heros=["Spiderman","Thor","Ironman"]
const dc_heros=["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros);// by doing this we have pushed dc_heros array in the marvel_heros arrys
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])
 
const allheros=marvel_heros.concat(dc_heros);// concat returns a new array having all the elements of marvel_heros and dc_heros
//console.log(allheros)


//another method to concatnate
const all_new_heros=[...marvel_heros, ...dc_heros] // this is done spread operator 
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting{ it can't decide on which key values it create}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
