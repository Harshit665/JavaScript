//for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}

// while loop

let idx= 0;
while(idx<10){
    console.log(idx);
    idx++;
}

// for of loop

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

//Map loop
const map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

console.log(map);

for (const [key, value] of map) {
    console.log(key ,"-", value);
    
}

const obj = {
    "name": 'John',
    "age": 80,
    "city": 'New York'
}

// it is not iterable
// for ( const [key,value] of obj){
//     console.log(key, "-", value);
    
// }

// for in loop
const myObj ={
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    cpp: 'C++'
}

for (const key in myObj){
    console.log(`${key} is shortcut for ${myObj[key]}`);
    
}

//for each loop

const num=[1,2,3,4,5,6,7];

num.forEach((key,idx)=>{
    console.log(`index is ${idx} and the value is = ${key}`);
    
})