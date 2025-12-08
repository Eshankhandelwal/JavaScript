// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     // insert at front and shifts elements by one place
// myArr.shift()        // removes the first element and shifts them to one place from right to left

// console.log(myArr.includes(9));  // it checks if 9 is present or not and returns in true or false
// console.log(myArr.indexOf(3));   // this tells the index of the element in the array if not then it gives -1

// const newArr = myArr.join()      // converts the array into string

// console.log(myArr);      [1,2,3,4,5]
// console.log( newArr);    1,2,3,4,5


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    // slice does not change the original array but takes a copy and the last one is not included

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // splice changes the original array takes a part of the arrayfrom 1 to 3
// console.log("C ", myArr);
// console.log(myn2);