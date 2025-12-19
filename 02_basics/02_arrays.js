const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)     // concat returns a new array
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]    // spread operator another method to combine arrays but now they are 
                                                        // individual elements 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)        // spreads them into a single elements  an array
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))    // checks if it is array or not returns true or false
// console.log(Array.from("Hitesh"))       // converts them into an array
// console.log(Array.from({name: "hitesh"})) // interesting // returns an empty array we have to tell which one to convert into array

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));   // returns a new array from a set of elements