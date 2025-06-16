const buttons = document.querySelectorAll(".button");
const bdy = document.querySelector("body");

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === "gray"){
            bdy.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            bdy.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            bdy.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            bdy.style.backgroundColor = e.target.id;
        }
    })
    
})