let a = 300;

if(true){
    let a = 233;
    console.log(a); // 233;;
}
console.log(a); // 300

function one(){
    const userName = "harshit";

    function two(){
        const website = "youtube";
        console.log(userName);;
    }
    //console.log(website);
    two();
}

one();

// read about closures in js
// also read about lexical scope in js
// also read about IIFE

(function chai (){
    console.log(`DB connected`);
    
}());

( (name)=>{
    console.log(`another Way to write IIFE ${name}`);
    
} )("harshit the great coder")