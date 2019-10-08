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


// 3. Numbers Basics

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


// 4. String Basics

var myName = 'Ashik';
console.log(myName);
var sentence = "He said Hi";
console.log(sentence);
var sentence = "He said \"Hi\"";
console.log(sentence);
var sentence = 'He said "Hi"';
console.log(sentence);

// to use these symbols in string we have to add backslash in front of it

// concatenate strings

var fullName = 'Ashik ' + 'Liyakathali';
console.log(fullName);

var sentence2 = 'My name is ' + fullName;
console.log(sentence2);

fullName += ' is my name.';
console.log(fullName);


// 5. Strings: [bracket notation]

var firstName = "Ashik";
console.log(firstName);

console.log(firstName[0]);
console.log(firstName[4]);
console.log(firstName.length);
console.log(firstName[firstName.length - 2]);

// cant do this operation in js bcoz string is fixed
// firstName[0] = "X";
// console.log(firstName);

//but a different string can be assigned to the same variable

firstName = "Khalid";
console.log(firstName);


