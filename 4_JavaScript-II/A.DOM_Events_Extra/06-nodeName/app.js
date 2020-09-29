const brnTry =  document.getElementById('try')
brnTry.addEventListener('click',myFunction)

function myFunction(){
    let myNodeName = document.getElementById('myP').nodeName
    document.getElementById('demo').innerHTML = myNodeName;
}