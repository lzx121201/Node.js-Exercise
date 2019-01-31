var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number')
        {
            resolve(a+b);
        }else{
            reject('Arguments must be numbers');
        }
    },1500);
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Hey. It worked!');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log(`Success: ${message}`);
// }, (errorMessage)=>{
//     console.log(`Error: ${errorMessage}`)
// });