const myArray = [1,2,3,4,5]; // array of numbers
const myArray2 = ["apple", "banana", "cherry"]; // array of strings
const myarray3 = new Array(1,2,3,)

// arrays are resizable and can hold any type of data it can not accessible with strings
// it always make shallow copies not deep copies read about this in MDN documentation
// there are too many methods available for arrays in JavaScript read in detail in mdn documentation

const arr1 = [8,7,6,5,4];
const arr2 = arr1.join(); // join the array elements into a string

console.log(arr1);
console.log(arr2);

console.log(Array.from({name:"harshit kesharwani"}));  // intresting use of Array.from to create an array from an object

let score1= 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creates an array from the given arguments



