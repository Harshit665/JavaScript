const clock = document.getElementById("clock");

//let date = new Date()
//console.log(date.toLocaleTimeString()); // this will update time automatically when clicked means show the current time on clicking but we need running time means the time automatically update without clicking the button just like the time in out devices . so we use the inbuilt method called setinterval method 

setInterval(()=>{
    let date = new Date()
    // console.log(date.toLocaleTimeString()); // checknig in the console
    clock.innerHTML = date.toLocaleTimeString()
    
},1000)
