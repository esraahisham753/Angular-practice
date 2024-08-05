function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2, 3));
console.log(add(2, 3, 5));

const sub = (num1: number, num2: number, num3=10): number => num1 - num2 - num3;

console.log(sub(2, 3));
console.log(sub(2, 3, 5));

const mul = function (num1: number, num2: number): number {
  return num1 * num2;
};

const addNums = (num1: number, num2: number, ...num3: number[]): number => {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}

const numbers = [1, 2, 3, 4, 5];
console.log(addNums(2, 3, 4, 5, 6, 7, 8, 9, 10));

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["e", "a", "B"]);
