let val;
let par;

//Number to String
val = 555;
par = String(val);                   // accessing global object
par = String(val + 4);

//Bool to String
val = true;
par = String(val);

//Date to String
val = new Date();
par = String(val);

//array to String
val = [1,2,3,4,5];
par =String(val);

//toSting
val = [1,2,3,4,5];
par = val.toString();

//String to Number
val = '555';
par = Number(val);

//Bool to Number
val = true;
par = Number(val);

//null to Number
val = null;
par = Number(val);
//Special String to Number
val = 'hello';
par = Number(val);        // NaN : not a number

//Array to Number
val = [1,2,3];
par = Number(val);   // can't be converted this way

//parseInt & parseFloat               // float = dicimal number
val = '555.524';
par = parseInt(val);                  // convert string to integer // cut off decimals
par = parseFloat(val);                // convert string to float number // keeps decimals
//Output
console.log(val);
console.log(typeof val);
console.log(val.length) // string method : undefined
console.log(par);
console.log(typeof par);
console.log(par.length);
console.log(par.toFixed(2)) //xxx.xx // convert to decimal number //0 will round a dicimal number to a Integer //convert to string
console.log(par == val);  // no autoconversion // autoconversion only between numbers and strings

//NaN concept:
function checkNan(x){
    if(isNaN(x)){
    return NaN;
}
return x;
}
console.log(checkNan('1'));
//expected output:"1"
console.log(checkNan('Hello'));
//expected output:NaN