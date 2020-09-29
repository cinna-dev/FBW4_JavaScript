/* 
Async/await : special syntac to work wtih promises in a more comfortable fashion


 */

//The word "async" before a function
//This means a function always returns a promise.
//Values are wrapped in a resolved promise automatically
//Doesn't work with arrow functions
async function sampleFunc() {
    /* return Promise.resolve('Hello February') */
    return 'Hello February'
}

console.log(sampleFunc())
sampleFunc().then(val => head.innerHTML = val); // id 'head' can not be declared as variable or it wont work anymore
// So, async "ensure" that the function returns a promise and "wraps" it's returned value into the resolved value

//Await:
//There's another keyword,await, that works only inside async functions.

//The keyword "await" settles and returns it's result.

async function myTest(){    // doesn't return a Promise but still needs to be async to use "await"
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done!"),2000)
    });
    let result = await promise;     //"await" will async the instructions inside the function
    alert(result); // "done!"
}

//myTest();
//await litteraly makes JavaScript wait until the promise get executed and then go with the result.

//That doesn't const any CPU resources, because the enginecan do other jobs in th e meantime: execute other scripts, handle events, etc.

async function myFunc(){
    const promise = new Promise((resolve,reject)=>{     //Promise 'GET' data
        setTimeout(() => {resolve('Hello Feb')  // sets the returned Promise Object to resolved// therefore needs to be returned
        }, 2000);
    })
    const error = true;
    if(!error){
        const res = await promise;  // Wait until promise is resolved
        return res
    }else{
        await Promise.reject(new Error('Something went wrong')) // sets the async Promise to reject
    }
}

//myFunc().then(val => console.log(val)).catch(val => console.log(val)) // Promise 'retunr' data //returned Promise inherant the state of the "Promise inside the async function"    

async function getUsers (){
    //await response of the fetch call
    const response = await fetch('https://api.github.com/users')

    //Only proceeds once its resolved
    const data = await response.json()

    //Only proceed once the second pomise is resolved

    return data;
}
getUsers().then(users => console.log(users))