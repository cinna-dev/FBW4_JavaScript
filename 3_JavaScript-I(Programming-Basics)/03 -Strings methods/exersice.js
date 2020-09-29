function countMyName(str, name){
    let counter = 0;
    str = str.split(' ');
    for(i=0;i<str.length;i++){
    if(str[i].includes(name)){
            counter++;
        }
    }
return counter;
}
const myName = 'Philipp';
const text = 'Hello my name is Philipp.';
console.log(countMyName(text, myName));