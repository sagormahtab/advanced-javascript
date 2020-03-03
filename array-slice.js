const nums = [2,3,4,6,9,5];

// const part = nums.slice(2,5); //begin, end
// console.log(part);
// console.log(nums);

const removed = nums.splice(2,3,44); //parameter -> begin, kotogula, inject,inject (means we can add items as much as we want)
// console.log(removed);
// console.log(nums);

const together = nums.join(""); //also join(" "), join(",")
console.log(together);