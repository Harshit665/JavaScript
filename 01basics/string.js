const firstName="Harshit";
const lastName="kesharwani";

const fullName=(firstName + lastName); // string concatenation But this the outdated way of doing it so we use string interpolation means using the backtick and we inject values in it like this

const fullName2=`the first name is ${firstName} and the last name is ${lastName} = ${firstName.toUpperCase() +" "+ lastName}`; // string interpolation
console.log(fullName2); // the first name is Harshit and the last name is kesharwani = HARSHIT kesharwani

// another way of writing the string 

const name = new String("Harshit"); // this is the object way of writing the string
console.log(name[0]); // [String: 'Harshit'] this is the object way of writing the string
console.log(name.length); // 7 this is the length of the string
console.log(name.__proto__); // this is the prototype of the string object

// there are too manyb methods in the string object you can read about it in the documentation like mdn or console using the .__prototype

// difference between slice and substring