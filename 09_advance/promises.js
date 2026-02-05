// const promiseOne = new Promise(function(resolve , reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task complete');
//         resolve();   // without the use of resolve promise cannot run
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// });

// Promise 2

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log('promise 2 consumed');
// });


// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async task 3');
//         resolve({username: "Eshan" , email: "abc@gmail.com"});
//     }, 1000);
// });

// promiseThree.then(function(user){
//     console.log(user.username);
// });


// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Eshan" , password: "abc123"});
//         } else{
//             reject('Error: something went wrong');
//         }
//     }, 1000);
// });

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()




