//   stack (primative)  heap (non-primative)

let myYoutubename = "Masood programmer"
let anothername = myYoutubename
anothername = "sarki Masood"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "masaood@gmail.com",
    age: 19,
    api : "user@ybl"

}

let userTwo = userOne
userTwo.email = "sarkimasood@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)