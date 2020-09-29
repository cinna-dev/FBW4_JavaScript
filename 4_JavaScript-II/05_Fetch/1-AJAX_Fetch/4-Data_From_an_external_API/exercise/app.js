document.getElementById('login').addEventListener('click', getAccountData)

function getAccountData(e){
    const UserName = document.getElementById('userName').value
    const passWord = document.getElementById('passWord').value
    console.log(UserName, passWord)
    let output = ''
    xhr = new XMLHttpRequest();
    xhr.open('GET' , 'users.json', true)
    
    xhr.onload = function(){
        if(this.status === 200){  
            const accs = JSON.parse(this.responseText)
            accs.forEach(item => {
                console.log(item.user ,item.password)
                if(item.user == UserName && item.password == passWord){
                    console.log('fff')
                    for(let key in item){
                        console.log(item[key])
                        output += `<li>${key} ${item[key]}</li>`
                    }
                }
            }); 
        }else{
            output = `<li>Failed</li>`
        }
        document.getElementById('output').innerHTML = output;
    }
    xhr.send()
    e.preventDefault()
}