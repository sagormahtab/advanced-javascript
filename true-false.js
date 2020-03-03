//falsy
//false
// 0
// ""
// undefined
// null
// NaN (Not a Number)
// Truthy
// '0' ' ' [] {}
//const age = 4;
const name = 12;
if(name || name == 0){ //or name; or name.length > 0
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
let name2 = null;
console.log(name2);