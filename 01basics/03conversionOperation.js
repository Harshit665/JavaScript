let score="33abc"; // string with non-numeric characters

console.log(typeof (score)); // number

let valueInNumbers=Number(score); // convert to number
console.log(typeof (valueInNumbers)); // number
console.log("valueInNumbers: " + valueInNumbers); // NaN

/*
 "33" => number
 "33abc" => NaN
 "abc" => NaN
 true => 1
 false => 0
*/

// 1 => true 
//0 => false
//"" => false
//"harshit" => true

let someNumber = 22

let convertedValue = String(someNumber); // convert to string
console.log(convertedValue); // "22"
console.log(typeof (convertedValue)); // string

//**************************** operations *******************************

// console.log(2+2) // 4
// console.log(2-2) // 0
// console.log(2*2) // 4
// console.log(2/2)// 1
// console.log(2**3) // 8
// console.log(2%3) // 2

console.log(1+"2"); // "12" (string concatenation)
console.log("1"+2); // "12" (string concatenation)
console.log(1+2+"3"); // "33" (string concatenation)
console.log("1"+2+3); // "123" (string concatenation)
console.log(1+2+3+"4"); // "64" (string concatenation)

console.log(true); // true
console.log(false); // false

let num1, num2 ,num3 
num1=num2=num3=10; // all three variables are assigned the value 10
 


