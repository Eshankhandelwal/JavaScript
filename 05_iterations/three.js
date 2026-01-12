// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5];

// for(const num of arr){
//     console.log(num);
// }


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


// Maps

const map = new Map()       // Only distinct values and no duplicates
map.set('IN' , "India") 
map.set('USA' , "United States Of America")
map.set('FR' , "France")
map.set('RU' , "Russia")

console.log(map);

// for(const key of map){
//     console.log(key);       // it return arrays
// }

// for(const value of map){
//     console.log(value);       //  it return arrays
// }

for(const [key , value] of map){        
    console.log(key, "->" ,value);    // the output of it is string
}

const myObjects = {     
    game1: "NFS",
    game2: "Spiderman",
    game3: "GTA 6",
    game4: "Counter Strike",
    game5: "Tekken 7"
}

// This will not work because (for of) loop works with iterables like (arrays , strings , map) 
// But normal javascript Object is not iterable

for(const [key , value] of myObjects){    
    console.log(key, "->" ,value);
}