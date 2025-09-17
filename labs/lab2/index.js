let myPromise = new Promise((resolve, reject) => {
    //resolve("Promise resolved successfully");
    reject("Promise rejected");
});

// console.log("---START---")

// myPromise.then((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error);
// })

// myPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })


// console.log("---END---")

// Chaining Promises
// myPromise.then((message) => {
//     console.log(message);
//     return "Chaining promises";
// }).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })

// getPromise(5).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })

// Using Promise.all to handle multiple promises
Promise.all([getPromise(15), 
    getPromise(25), 
    getPromise(20)])
.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});