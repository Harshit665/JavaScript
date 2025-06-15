function addition(a,b){ // parameters are passed in the function
    console.log(`the sum of ${a} and ${b} is ${a+b}`);
}

addition(4,5); // passing the arguments to the function

function addition2(a,b){
    let result = a+b; // local variable
    return result; // return the result
}
const result = addition2(2,4); // calling the function
///console.log(`result is ${result}`);

function isUserLoggedIn(user="kesharwani"){
    if(!user){
        console.log("pls enter a user name");
        return; // exit the function if user is not provided
    }

    return `${user} just logged in`;
}

console.log(isUserLoggedIn("Harshit"));

// learning how cart works in e-commerce

function calculateCartTotal(...num1){ // this ... is called rest operator, it collects all the arguments into an array and now we can add perform operations on it 
    return num1
}

 console.log(calculateCartTotal(122,233,344,566,655));

 const user ={
    username: "harshit kesharwani",
    price: 2666
 }

 function handleObject(anyobject){
    console.log(`usename is ${anyobject.username} and the price is ${anyobject.price}`); // if we pass prices instead of price then we have to check for type safety whether the property we are extracting present in the object or not
 }

 handleObject(user); // passing the object to the function

 // we can also directly pass the object to the function
 handleObject({
    username: "hitesh chaudhary",
    price: 2666
 });

 // we can also do it for the array 

const myNewArray =[1,2,3,4,5,6];

function handleArray(getSecondValueOfArray){
    return getSecondValueOfArray[1]; // we can also use destructuring to extract the values from the array
}

console.log(handleArray(myNewArray));
