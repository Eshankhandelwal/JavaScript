const myObjects = {     
    game1: "NFS",
    game2: "Spiderman",
    game3: "GTA 6",
    game4: "Counter Strike",
    game5: "Tekken 7"
}

for(const key in myObjects){
    // console.log(`${key} => ${myObjects[key]}`);
}

for(const key in myObjects){
    // console.log(myObjects[key]);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for...in iterates over enumerable properties of an object, not over Map entries.
// A Map stores data internally, not as normal object properties, so:
// The loop will print nothing (no output).

// Enumerable properties are the properties (keys) of an object that can be listed or looped over.

for (const key in map) {
    console.log(key);          // no output
}