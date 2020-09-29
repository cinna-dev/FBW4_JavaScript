// The Element.matches(css-selector) does not look for anything, it merely checks if the element matches the given css-selector.
//it returns true, otherwise it returns false.

//The Method comes in handy when we are iterating over Elements (for ecample array of anything similare) and trying to filter out those that interest us.



//can be any collection instead of body.children//
const elements = document.body.children


for(let elem of elements){
  if(elem.matches('a[href$="zip"]'))   // ['href'$='inculdes'= anything with "zip"] // matches(css-selector) // $ works with any element attribute
  console.log(`The archive reference: ${elem.href}`);
}
// makes sense to use manly for attributes ???