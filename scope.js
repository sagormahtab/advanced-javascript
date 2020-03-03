//Interview question: what is hoist? ans: if we declare var in our code then var hoist the variable all over the code.
//It is known as hoist. BTW just variable er naam ta ke upore ney. value ney na.
const bonus = 35;
function sum(num1, num2){
    const result = num1 + num2+bonus;
    if(result>9){
        var mood = "happy";
        //console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(5,3);
console.log(output);
console.log(day);
var day = "friday";
// console.log(result); //it's not on scope