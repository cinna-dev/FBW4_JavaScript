//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
//Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
//Multiple callback functions would create callback hell that leads to unmanageable code.

/* let promise = new Promise(function (resolve, reject){
    // executor (the producing code "the singer give his result")
 }); */

/// Resolve ///

/* let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed

    //after 1 second the job is done with result "done"
    setTimeout(() => resolve('done'), 1000)

}); */

/// Reject ///

/* let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("error!!")), 1000)

}); */


/* let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000)

});

//resolve runs the first function in then
promise.then(
    result => alert(result), //show "done" after 1 sec
    error => alert(error)   // doesnt't run
) */
//result refers to resolve // so it will alert "done" after 1 sec
//console.log(promise)

const posts = [{title : 'Post one', body : 'This is post one'},{title : 'Post two', body : 'This is post two'}]

function createPost(post){
    return new Promise((resolve, reject)=>{     // => executer
        setTimeout(()=> {
            posts.push(post);
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Error : something went wrong !!!')
            }
        },2000)
    })
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(item => output += `<li>${item.title}</li>`)
        document.body.innerHTML = output;
    },1000)
}

// getPost get passed as an argument // will become paramter resolve in "createPost" // then will be executed in line 48.
createPost({title : 'Post three', body : 'This is post three'},).then(getPosts).catch(err => console.log(err))  // catch = callback for "rejection" // then = callback for "resolution" and "rejection"
/// alternatively ///
//.then(getPosts,err => console.log(err))   // "resolution" and "rejection" as callbacks of "then"