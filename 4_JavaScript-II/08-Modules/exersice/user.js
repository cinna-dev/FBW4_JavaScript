function addUser(user) {
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.addEventListener('click', styleLi)
    button.append('Style')
    button.style.display = 'block'
    button.style.marginLeft = 'auto';
    button.style.marginRight = 0;
    li.append(user)
    li.append(button)
    document.getElementById('list').append(li)
}

function deleteUser(user) {
    let list = Array.from(document.getElementById('list').children)
    list.forEach((item) => {
        if (item.innerText == user) {
            item.remove();
        }
    })
}

function changeUser(user1, user2) {
    let list = Array.from(document.getElementById('list').children)
    list.forEach((item) => {
        if (item.innerText == user1) {
            item.innerText = user2
        }
    })
}

function styleMyUserList(user, background, textColor, fontSize) {
    let list = Array.from(document.getElementById('list').children)
    list.forEach((item) => {
        if (item.innerText == user) {
            item.style.background = background;
            item.style.color = textColor;
            item.style.fontSize = fontSize;
        }
    })
}

function styleLi (e){
    this.parentElement.style.background = this.parentElement.style.background == '' ? 'red' : ''
    this.parentElement.style.color =  this.parentElement.style.color == '' ? 'white' : ''
    this.parentElement.style.fontSize = this.parentElement.style.fontSize == '' ?  '32px' : ''
    this.parentElement.style.border = this.parentElement.style.border == '' ?  '5px black solid' : ''
    e.preventDefault()

}
export {
    addUser,
    deleteUser,
    changeUser,
    styleMyUserList

}