let randomNumbers = parseInt(Math.random()*100 + 1); // generaating the random No. b/w 1 to 100
const submit = document.querySelector("#subt"); // accessing the submit button
const userInput = document.querySelector("#guessField"); // selecting the guess field 
const guessSlot = document.querySelector(".guesses"); // selecting the guesses slot
const res = document.querySelector(".lastResult"); // selecting the result
const lowOrHi = document.querySelector(".lowOrHi"); 
const startOver = document.querySelector(".resultParas"); // selecting the para that will be inject 

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);     
        validGuess(guess);
    })
}

// checking function for number ,means whether the input number is valid or not
validGuess =(guess)=>{
    if(isNaN(guess)){
        alert("please enter a valid number between 1 and 100 ")
    }
    else if (guess<1){
        alert("please enter a number greater than 0")
    }
    else if(guess > 100){
        alert("pls enter value less than or equal to 100")
    }
    else{
        prevGuesses.push(guess)
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`game Over. and the random number was ${randomNumbers}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// it will check whether the No.is equal to less than higher than the random number or not if equal then call the display function to show the result
checkGuess = (guess)=>{
    if(guess == randomNumbers){
        displayMessage(`you guessed it rigth`);
        endGame();
    }
    else if(guess < randomNumbers){
        displayMessage(`the input number is low`);
    }
    else if(guess > randomNumbers){
        displayMessage(`the input number is high`);
    }
    else{

    }
}

// it will check the Number ,clean teh value , updates the array
displayGuess = (guess) =>{
    userInput.value ="";
    guessSlot.innerHTML += `${guess} ,`;
    numGuesses++;

    res.innerHTML = `${11 - numGuesses}`;
}

// it will display the result of the game
displayMessage = (message) =>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// ending the game
endGame = () =>{
    userInput.value = "";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<button id="startGame">New Game</button>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();
}

// startingthe new game 
newGame = () =>{
    const newGameButton = document.querySelector("#startGame");
    newGameButton.addEventListener("click",(e)=>{
        randomNumbers = parseInt(Math.random()*100 + 1);
        prevGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = "";
        res.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}