const frm = document.querySelector("form");

 // const height = parseInt(document.querySelector("#height").value) 
 //const weight = parseInt(document.querySelector("weight").value)
 // we are not selecting the elements outside the eventlistener because we want that the element is selected when the event is clicked 

frm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const res = document.querySelector(".result");

    if(height === "" || height <=0 || isNaN(height)){
        res.innerHTML = "please give a valid value";
    }

    else if(weight === "" || weight <=0 || isNaN(weight)){
        res.innerHTML = "please give a valid value";
    }

    else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2);
// showing the result 
         res.innerHTML = `<span>${BMI}</span>`
    }
})