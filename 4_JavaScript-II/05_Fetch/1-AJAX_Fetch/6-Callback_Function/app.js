const posts = [{
        title: 'post1',
        body: 'This is amazing post one'
    },
    {
        title: 'post2',
        body: 'This is amazing post two'
    }
]

//Asynchronised Callback Function
/* function createPost(post) {
    setTimeout(function () {    //createPost is syncronous but setTimeout makes it asyncronous so it will only be done once function getPosts has already been called
        posts.push(post);
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (item) {
            output += `<li>${item.body}</li>`;
           
        });
        document.body.innerHTML = output;
    }, 1000)
}
createPost({
    title: 'post three',
    body: 'This is amazing post three'
})
getPosts(); */


//Callback function

function createPost(post, callback) {   //callback function as parameter
    setTimeout(function () {   // function executed inside an argument-area are also called callback
        posts.push(post);
        callback();     //callback function get executed 
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (item) {
            output += `<li>${item.body}</li>`;
           
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({
    title: 'post three',
    body: 'This is amazing post three'
},getPosts)     //getPost as argument of createPost // does not get executed in the argument or in the parameter area

