let lname: string;
lname = 'Beato';
//lname = 10;
let newName = lname.toUpperCase();
console.log(newName);

let age: number;
age = 27;
//age = "27";

let dob = "27";
let result = parseInt(dob);
console.log(result);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];
empList = ["Maisy", "Maisy1", "Maisy2"];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
let newNum = numList[2];
let results = numList.filter((num) => num > 2);
console.log(results);
let emp = empList.find((emp) => emp === 'Maisy');
console.log(emp);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
};

let c: Color = Color.Green;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

let swapped = swapNumbers(1, 2);
console.log(swapped[0]);
let department;
department = "IT";
department = 10;


