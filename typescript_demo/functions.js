"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
const mul = function (num1, num2) {
    return num1 * num2;
};
const addNums = (num1, num2, ...num3) => {
    return num1 + num2 + num3.reduce((a, b) => a + b);
};
const numbers = [1, 2, 3, 4, 5];
console.log(addNums(2, 3, 4, 5, 6, 7, 8, 9, 10));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["e", "a", "B"]);
