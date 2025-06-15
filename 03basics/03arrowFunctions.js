const user = {
    userName: "harshit kesharwani",
    price:288,

    welcomeMessage: function(){
        console.log(`welcome ${this.userName} to the course, your price is ${this.price}`); // here this refers to the current context of the object
        console.log(this); // this refers to the current object
        
    }
}

user.welcomeMessage();
console.log(this); // this refers to the global object in non-strict mode, and undefined in strict mode
// Arrow functions do not have their own this context, they inherit it from the parent scope

function chai(){
    const userName= "harshit";
    console.log(this.userName);
    
}

chai(); // undefined, because this refers to the global object and there is no userName property in the global object

const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(2,3)); // 5

const add2 =(num1,num2) => (num1 + num2); // implicit return

// we can not use or call objects with arrow functions so we use paranthesis to enclose the object