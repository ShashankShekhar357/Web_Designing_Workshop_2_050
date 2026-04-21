let mixedArray = [1,"Hello",true,{name:"Alice"},[1,2,3]]
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(mixedArray.length);
function multiply(a,b) {
    return a*b;
}
console.log(multiply(10,2));
function divide(a,b) {
    return a/b;
}
console.log(divide(10,2));
function sum(a,b) {
    return a+b;
}
console.log(sum(10,2));

let sayHi = () => console.log("Hi");
sayHi();

let square = x => x*x;
console.log(square(4));

const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice");

let newarray = [1,2,3,4,5];
let squaredArray = newarray.map((num) => num*num);
console.log(squaredArray);

const sum1 = (a,b) => (a+b);
console.log(sum1(2,5));

let evennum = [1,2,3,4,5];
let filteredevennum = evennum.filter(num => num%2 === 0);
console.log(filteredevennum);

let sum2= [1,2,3,4,5];
let total = sum2.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log(total);

let students = [
    {name: "Alice", marks: 85 },
    {name: "Bob", marks: 92 },
    {name: "Charlie", marks: 78 }
];
let marks = students.map(student => student.marks);
console.log(marks);
let names = students.map(student => student.name);
console.log(names);
let topstudents = students.filter (student => student.marks > 80);
console.log(topstudents);
let totalmarks = students.reduce ((acc,student) => acc + student.marks,0);
console.log(totalmarks);