// const tinderUser = new Object(); // this is another way of writing the objects
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Harshit";
tinderUser.isLoggedIn = false;

//  console.log(tinderUser);

const regularUser = {
    email:"hk@gmail.com",
    name:{
        userName: {
            firstname:"harhsit",
            lastname:"keaharwani"
        }
    }
}
console.log(regularUser.name.userName);

const a1={1:"a", 2:"b"};
const a2={3:"c", 4:"d"};
const a3={5:"e", 6:"f"};

const obj = Object.assign({}, a1, a2, a3); // this method is not popular but works
console.log(obj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
const obj1 = { ...a1, ...a2, ...a3 }; // this is the most popular way to merge objects
console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const User =[
    {
        id: "123abc",
        name: "Harshit",
        isLoggedIn: false,
        lastActive: "2023-10-01"
    },
    {
        id: "456def",
        name: "John",
        isLoggedIn: true,
        lastActive: "2023-10-02"
    }
] // this method is used to create aobjects in an array we use generally when the data is fetched from data base pr API
console.log(User[0].name); // Harshit

// important observation or technique

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // this is very important to note that this will give output as the array of keys in whcih we can apply different methods like loop etc.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // this will give output as the array of key value pairs in which we can apply different methods like loop etc.
console.log(tinderUser.hasOwnProperty("id")); // this will check if the object has the property or not


