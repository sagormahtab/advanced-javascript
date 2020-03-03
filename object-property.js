const students = [
    {id: 21, name:"Kashem Shikder"},
    {id: 31, name: "Akkas Bhuiyan"},
    {id: 41, name: "Johnny Dep"},
    {id: 51, name: "Chowdhury Shaheb"}
];
// const output = [];
// console.log(students);
// for(let i = 0; i < students.length; i++){
//     output.push(students[i].name);
// }
// console.log(output);
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);