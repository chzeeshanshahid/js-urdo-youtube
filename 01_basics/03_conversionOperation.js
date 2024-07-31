let score = "zeeshan"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let IsLoggedIN = "zeeshan"

let booleanIsLoggenIn = Boolean(IsLoggedIN)
// console.log(booleanIsLoggenIn);


// 1 => true; 0 => false
// "" => false
// "zeeshan" => true

let someNumber = 33

let StringNumber = String(someNumber)
// console.log(typeof StringNumber);
// console.log(StringNumber);

// **************************** Operations ******************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Zeeshan"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // value is 12
// console.log(1 + "2"); // value is 12
// console.log("1" + 2 + 2); // value is 122
// console.log(1 + 2 + "2"); // value is 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1 , num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// =========================================================

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
                                // prefix ++x and postfix x++
                                // postfix main value increment hone se phele likh deta hai 
                                // prefix main value increment hone ke baad likhta hai
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//================================================================