const promise1 = new Promise((resolve, reject) => {
  //do an asynctasks like
  // DB calls , cryptography , network

  setTimeout(() => {
    console.log("async 1 is complete");
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log("promise consumed");
});

// sometime we do not store the promise in variable like
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise 2 ");
  }, 1000);
  resolve();
}).then(() => {
  console.log("async 2 resolve");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "harshit", email: "hk@gmail.com" });
  }, 1000);
});

promise3.then((user) => {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "kesharwani", email: "kesh@gmail.com" });
    } else {
      reject(`error:something went wrong harshit pls check`);
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log(`the promise is either resolved or rejected`);
    
  })

  // async await syntex
  const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let errors = true;
        if (!errors) {
            resolve({username:"5name", email:"5@gmail.com"})
        }
        else{
            reject("error in 5 promise")
        }
    },1000)
  })

  async function consumePromise5(){
   try{
     const response = await promise5;
     console.log(response);
   }
   catch(errors){
    console.log(errors);
    
   }
    
  }
  consumePromise5();

  async function getAllUsers() {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    const data = await response.json();
    console.log(data);
    
  }

  getAllUsers();

  fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((errors)=>{
    console.log(errors);
    
  })

  //question I asked the chatgpt in series 

  //we often here that the js run on browser the js engine present in browser now that engine is extracted and fetch in early days dependent on browser now its also attached to node.js so what is browser pls explain with easy examples 

  //how engine is attached in browser

  //how browser made

  //after reading your ans i found that internet is more bigger thing what is that

  // how fetch used instead of promises what it does how it replaces the promises 