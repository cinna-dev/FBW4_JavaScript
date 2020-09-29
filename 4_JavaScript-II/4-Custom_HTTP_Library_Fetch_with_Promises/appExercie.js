const http = new EasyHTTP

//Get User
http.get('https://api.github.com/users').then((val) => console.log(val)).catch(er => console.log(er))
http.createUi()
//Create User
/* const user = {
    name: 'Mr. Harris',
    userName: 'bomberman',
    email: 'h.2000Qgmail.com'
} */

//http.post('https://jsonplaceholder.typicode.com/users', user).then((val) => console.log(val)).catch(er => console.log(er))

// Update single User on Server
// needs specific url to the Post // user/num related to id of post when posted
//http.put('https://jsonplaceholder.typicode.com/users/8', user).then((val) => console.log(val)).catch(er => console.log(er))

//Delete User
//http.delete('https://jsonplaceholder.typicode.com/users/8').then((val) =>console.log(val)).catch((er) => console.log(er))