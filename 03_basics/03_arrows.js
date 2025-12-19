const user = {
    username : "Eshan",
    coursePrice : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);                                         
    }
}

// user.welcomeMessage();
// user.username = "xyz";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//    let username = "Eshan"
//    console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "Eshan";
//     console.log(this.username);
// }

// chai();

// const chai  = () => {
//     let username = "Eshan";
//     console.log(this);
// }

// chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(2 , 3));

// const addTwo = (num1 , num2) => num1 + num2;

// console.log(addTwo(2 , 3));

// const addTwo = (num1 , num2) => (num1 + num2);

// console.log(addTwo(2 , 3));

const addTwo = (num1, num2) => ({username: "hitesh"});

console.log(addTwo(2 , 3));

const myArray = [2,5,3,7,8];

myArray.forEach()