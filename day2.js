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


// 6. 20 String methods

var stringOne = "Ashik Liyakathali is my name";
var stringTwo = "Khalid is my friend";

//charAt()

console.log(stringOne.charAt(1));

//charCodeAt()

console.log(stringOne.charCodeAt(1));

//concat()

console.log(stringOne.concat(stringTwo));

//endsWith()

console.log(stringOne.endsWith("name"));
console.log(stringTwo.endsWith("friend"));
console.log(stringOne.endsWith("friend"));
console.log(stringTwo.endsWith("name"));

//fromCharCode()

console.log(String.fromCharCode(115));


//includes()

console.log(stringOne.includes("name"));
console.log(stringTwo.includes("name"));

//indexOf()

console.log(stringOne.indexOf("is"));

//lastIndexOf()

console.log(stringOne.lastIndexOf("name"));

//match()

console.log(stringTwo.match(/friend/g));

//repeat()

console.log(stringOne.repeat(3));

//replace()

console.log(stringOne.replace(/name/g, "NAME"));

//search()

console.log(stringOne.search("is"));

//slice()

console.log(stringOne.slice(2,4));

//split()

console.log(stringOne.split(" "));

//startsWith()

console.log(stringOne.startsWith("Ashik"));

//substr()

console.log(stringOne.substr(1, 4));

//substring()

console.log(stringOne.substring(1, 4));

//toLowerCase()

console.log(stringOne.toLowerCase());

//toUpperCase()

console.log(stringOne.toUpperCase());

//trim()

var stringThree = "    abc    "
console.log(stringThree);
console.log(stringThree.trim());


// 7. Functions

function square(number) {
    return number * number;
}

console.log(square(5));

// global scope and local scope

var someVar = "Hat";
function myFun() {
 var someVar = "Shoes";
 console.log(someVar);
}

myFun();
console.log(someVar);

//nesting function

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquares(1,3));


// 8. Hoisting

//console.log(notDeclared); //gives error because it is not defined

console.log(definedLater); // if we use it before it is defined it shows undefined
var definedLater;
definedLater = 'I am defined';
console.log(definedLater); //if we use it after it is defined it displays the output

console.log(definedSimultanesouly); //it shows undefined
var definedSimultanesouly = 'I am defined';
console.log(definedSimultanesouly); //displays the output

doSomethingElse();
function doSomethingElse() {
    console.log('I did it');
}

//functionVar(); //it gives error because function is declared as variable
var functionVar = function() {
    console.log('I did it');
}
functionVar(); //it displays output because variable is defined now.


// 9. Comparison operators & If Else

//if
var sample = true;

if (sample) {
    console.log("Sample is true")
}
//prints the output because the variable is true

var sample = false;

if (sample) {
    console.log("Sample is true")
}
// doesnt perform the operation as variable is false

// if else

var sample = true;

if (sample) {
    console.log("Sample is true")
}
else {
    console.log("Sample is false")
}

var sample = false;

if (sample) {
    console.log("Sample is true")
}
else {
    console.log("Sample is false")
}

//comparison operators:
// > < <= >= == !=

var age = 18;

if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Child");
}

//else if

var age = 1;

if (age >= 18) {
    console.log("Adult");
}
else if (age < 18) {
    console.log("Child");
}
else if (age < 3) {
    console.log("baby");
}
// once a condition is met it does not check others. so we can to give preference to statements

var age = 1;

if (age >= 18) {
    console.log("Adult");
}
else if (age < 3) {
    console.log("baby");
}
else if (age < 18) {
    console.log("Child");
}

var age = 18

if (age == 18) {
    console.log("Adult");
}
else {
    console.log("Child");
}

var age = 17

if (age == 18) {
    console.log("Adult");
}
else {
    console.log("Child");
}

var age = 10;

if (age != 18) {
    console.log("Not Adult");
}




