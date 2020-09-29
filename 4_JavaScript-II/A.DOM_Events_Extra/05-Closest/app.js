let fLi = document.querySelector('.chapter'); //First LI

let x,y,z;

x = fLi.closest('.book') //UL  // looks up all parent tree until it finds the closest with searched attribute
y = fLi.closest('.contents') //DIV
z = fLi.closest('.heading') //null (because h2 is not an ancestor)
console.log(x)
console.log(y)
console.log(z)