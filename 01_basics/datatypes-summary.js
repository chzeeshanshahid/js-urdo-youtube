//  Primitive:
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 3412124121242414141414n // bigInt ko ese define karte hain akhir main n laga ke agar number boht bara hai



// Reference (Non primitive):
// Array, Objects, Functions

const heros = ["Umar", "Ali", "Abubakr"] // Array

let myObj = {
    name: "Zeeshan",  // JS main object ko curly brackets ke anda likhte hain
    age: 22, 
}

const myFunction = function(){
      console.log("Hello World"); // functions  
} 

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);