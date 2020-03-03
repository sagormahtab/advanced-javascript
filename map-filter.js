const numbers = [3,4,5,6,7,8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     result = element * element;
//     output.push(result);
// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// function square(element){
//     return element*element;
// }
// //or
// const square = element => element*element;
// //or
// const square = x => x*x;

// result = numbers.map(function(element){
//     return element*element;
// })

// const result = numbers.map(x => x*x);

// console.log(result);

//filter will return all matching element
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

//find will return the first matching element
const isThere = numbers.find(x => x >5);
console.log(isThere);