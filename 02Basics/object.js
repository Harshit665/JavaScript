// object literals are used to store key-value pairs in JavaScript. They are similar to dictionaries in Python or hash maps in other languages. Objects can contain properties and methods, and they are a fundamental part of JavaScript's object-oriented programming capabilities.
const mySym = Symbol("mySymbol"); // creating a symbol

const jsUser={
    name:"harshit",
    "full name":"harshit kesharwani",
    age:20,
    email:"hk@gmail.com",
    location:"india",
    isLoggedIn:true,
    [mySym]: "Symbollllllllll"
}

console.log(jsUser.name);
console.log(jsUser["full name"]); // accessing property with space in the name

console.log(jsUser[mySym]); // accessing the symbol property

jsUser.greeting = function() {
    console.log("hello this is harshit");
}

jsUser.greetingTwo = function() {
    console.log(`Hi! ${this.name} here from ${this.location}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

