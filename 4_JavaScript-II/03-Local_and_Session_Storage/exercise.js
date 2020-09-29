function setItemStorage(key,value){
    localStorage.setItem(key,value);
}
function removeItemStorage(key){
    localStorage.removeItem(key);
}
function clearStorage(){
    localStorage.clear();
}
setItemStorage('name','Peter');
//removeItemStorage('name');
//clearStorage()