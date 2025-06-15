// here read about if else, else if statements

// switch statements

const month =4;

switch(month){
    case 1: 
    console.log("January");
    break;   

    case 2: 
    console.log("febuary");
    break;

    case 3: 
    console.log("march");
    break;   

    default:
        console.log("Invalid month");
        break;
        
}

// Nullish Coalescing Operator (??) :null ot undefined ko check karta hai read about it
const userInput = null;
const defaultInput = "default value";
const finalInput = userInput ?? defaultInput; 
console.log(finalInput);
  
// ternary operator
const age = 18;
const canVote = age >= 18 ? console.log("Yes, you can vote") : console.log("No, you cannot vote");
