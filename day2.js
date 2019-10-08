// 1. Variables

var myName;

myName = "Ashik";

var state = "Michigan";

console.log("My name is " + myName);
console.log("My state is " + state);

state = "California";

console.log("My state is " + state);


// 2. Data types
// Boolean

var data = true;

if (data){
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame.");
}

var data = false;

if (data){
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame.");
}

// Null

var n = null;
console.log(n * 32);

// Undefined

var a;
console.log(a + 2);

//number

var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// String

var name = "Ashik"
console.log("Hi! my name is " + name)

// Symbol

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 == sym2);
console.log(String(sym1) == String(sym2));
console.log(String(sym1));

// Object

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);


// Numbers Basics

var number = 12;
console.log(number);

var number = 12 + 3;
console.log(number);

var number = 12 - 2;
console.log(number);

var number = 12 * 2;
console.log(number);

var number = 12 / 2;
console.log(number);

var number = 12 / 7;
console.log(number);

var number = 12 % 2;
console.log(number);

var number = 12 - 2.5;
console.log(number);

var number = 12 + 2.5;
console.log(number);

var number = 12 * 2.5;
console.log(number);

var number = 12 / 2.5;
console.log(number);

//incrementing number
var number = 12;
number++;
console.log(number);

//decrementing number
var number = 12;
number--;
console.log(number--);

//changing numbers to different values
var number = 12;
number += 5;
console.log(number);

var number = 12;
number *= 5;
console.log(number);

//pre increment

var number = 12;
console.log(number++);
console.log(number);

var number = 12;
console.log(++number);
console.log(number);





