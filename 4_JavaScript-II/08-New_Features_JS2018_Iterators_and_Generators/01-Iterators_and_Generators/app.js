/// Iterators Examplpe ///
//ES7
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ? {
                value: names[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}

// create array of names
const namesArr = ['Jack', 'Jill', 'John']

//Init Iterator

const name = nameIterator(namesArr)
console.log(name.next().value) //returns first name
console.log(name.next().value) //returns second name
console.log(name.next().value) //returns third name
console.log(name.next().value) //returns undifined


/// Generator Example ///

function* sayNames() { //* Asterix // needs asterix to work with 'yield'
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name2 = sayNames()
// returns the same Object that we predefined ourselfs in the Iterator Example
console.log(name2.next().value) //returns first name
console.log(name2.next().value) //returns second name
console.log(name2.next().value) //returns third name
console.log(name2.next().value) //returns undifined

//ID Generator
function* idCreator() {
    let index = 1; 
    while(true){
        yield index++;
    }
}

const gen = idCreator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
