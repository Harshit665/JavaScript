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
