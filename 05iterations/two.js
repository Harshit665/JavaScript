const myNums = [1,2,3,4,5,6,7,8,9];

const newNums =myNums.filter((nums)=>{return nums>5})
//console.log(newNums);

//read about filter() method in detail and see examples and also think about how search bar gives result according to us

const number=[1,2,3,4,5,6,7,8,9];

const newNumber = number
                 .map((num)=>{return num*10})
                 .map((num)=>{return num + 10})
                 .filter((num)=>{return num > 30})

   //console.log(newNumber);
   

// also read about the reduce method in detail with real world examples 

const N1 = [1,2,3,4,5,6,7,8,9];

const N2 = N1.reduce((acc, currval) => {
    console.log(`the acc value ${acc} and the currval is ${currval}`);    
    return acc + currval;
}, 0);

console.log(N2);
 // read the uses of reduce map filter 

 // example of reduce 
 const shoppingCart = [
    {
        itemName: "Js Course",
        price : "500"
    },
    {
        itemName: "Py Course",
        price : "500"
    },
    {
        itemName: "data science Course",
        price : "500"
    },
    {
        itemName: "AI/ML Course",
        price : "500"
    }

 ]

 const totalPrice = shoppingCart.reduce((acc,item)=>{return acc + item.price},0)
 console.log(totalPrice);
 