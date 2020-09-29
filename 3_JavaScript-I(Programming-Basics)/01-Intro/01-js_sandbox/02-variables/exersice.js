function greeting(greetWord, name){
return `${greetWord} ${name}`;
}

const greetingMe = greeting('Hi', 'Me');
console.log(greetingMe);

/* function findPhrase(text, phrase){
    let count = 0;
    text = text.split(' ');
    for(i=0;i<text.length;i++){
        if(text[i].includes(phrase)){
         count++;
        }
    }
    return count;
} */
/* function findPhrase(text, phrase){
    let count = 0;
    text = text.split(' ');
        if(phrase in text){
         count++;
        }
    return count;
} */
function findPhrase(text, phrase){
    let count = 0;
    let regExp = RegExp('\s'+phrase+'\s')+'gi';
    
    
    return regExp;// phrase.search(regExp);
}
let text1 = 'The rabit was jumping all the rabit time.';
let phrase1 ='rabit';
const num = findPhrase(text1, phrase1);
console.log(num)