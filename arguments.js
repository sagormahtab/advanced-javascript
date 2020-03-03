//arguments are array like object
// we can convert it to array by using ... spread operator
// function add(num1, num2){
//     console.log(arguments);
//     return num1 + num2 + arguments[2];
// }

function add(num1, num2){
    console.log([...arguments]);
    let result = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        result = result + arguments[i];
    }
    return result;
}

const result = add(12,15,25,27);
console.log(result);