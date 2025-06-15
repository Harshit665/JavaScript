// stack nad Heap ( used in all the primitive data types and heap is used for Non-primitive data types when we use stack memory means the variables we obtain copy of it while in heap we get the refrence of the variable in reference if we change something then original values also changes while in copy of the variable if we change something then it will not affect the original variable)

// example of stack memory
let myYoutubeName1 = "Harshit";
let myYoutubeName2 = myYoutubeName1; // copy of the variable
console.log(myYoutubeName2); // Harshit
myYoutubeName2 = "CodeWithHarry"; // changing the copy does not affect the original variable

// example of heap memory
let user1 = {
    name: "Harshit",
    age: 22
}

let user2 = user1; // reference of the variable
console.log(user2); // { name: 'Harshit', age: 22 } if i change te=he value in userone it will also change in user2 like

user2.name="Amazon";
console.log(user1); // { name: 'Amazon', age: 22 } // changing the reference affects the original variable