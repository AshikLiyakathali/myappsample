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


// 10. == & === Operators
// == is abstract quality
// === is strict equality

console.log(3 == "3"); // it shows true because string 3 is converted to number 3 and then compares.
console.log(3 === "3"); // it shows false because the data types are diferent

console.log(true == '1');
console.log(true === '1');

console.log("This is a string" == new String("This is a string"));
console.log("This is a string" === new String("This is a string"));

//better to use === to increase clarity and avoids confusion


// 11. Null vs undefined

var test
console.log(test)

test = null

console.log(test)

console.log(typeof null)
console.log(typeof undefined)

console.log(null === undefined)
console.log(null == undefined)

console.log(null === null)
console.log(null == null)

console.log(!null)
console.log(!!null)

console.log(1 + null)
console.log(1 + undefined)


// 12. Logical Operators & Short circuit evaluation

// Logical AND is &&
// Logical OR is ||

var num = 7;
if (num > 5) {
    if (num < 10) {
        console.log("Unicycle")
    }
}

if (num > 5 && num <10){
    console.log("Unicycle")
}

if (num > 5 || num <10){
    console.log("Unicycle")
}

// short circuit evaluation is when one condition is met it doesnot have to check the other
// Like if and is false then no need to check. answer will be false
// if or is true then no need to check. answer will be true

if (4 > 5 && 5 > 6) {
    console.log("high")
}
else{
    console.log("low")
}
// in this example it doesnot check the second condition because first one is false.

//We can us it for functions also

var test = true;
var isTrue = function() {
    console.log('Test is true');
};
var isFalse = function() {
    console.log('Test is false');
};

if (test) {
  //  isTrue();
}

(test && isTrue());

test = false;
if(!test) {
    isFalse();
}

(test || isFalse());

//short circuit can be used to assign default value in a function

function drink(name) {
    name = name || 'bar';
    console.log("My name is " + name);
}
drink();
drink("Ashik");


// 13. Ternary operator
// condition ? expr 1 : expr 2
// if condition is true then it returns expr 1 else it returns expr 2

var age = 15;
if (age >=18 ) {
    console.log("Adult");
}
else{
    console.log("Not Adult");
}

var age = 19;
console.log((age >= 18) ? "Adult" : "Not Adult");

var stop;
age > 18 ? (
    console.log("Allowed"),
    stop = false
) : (
    console.log("Not Allowed"),
    stop = true
);

// we can have a ternary operation inside a ternary operation

var firstCheck =  false,
secondCheck = false,
access = firstCheck ? "Not Allowed" : secondCheck ? "Not Allowed" : "Allowed";

console.log(access);


// 14. Switch Statements

let day;
switch (new Date().getDay()) {
    case 0:
    	day = "Sunday";
        break;
    case 1:
    	day = "Monday";
        break;
    case 2:
    	day = "Tuesday";
        break;
    case 3:
    	day = "Wednesday";
        break;
    case 4:
    	day = "Thursday";
        break;
    case 5:
    	day = "Friday";
        break;
    case 6:
    	day = "Saturday";
}
console.log(day)

//if we dont use break all the remaining cases will be executed

var Animal = 'Spoon';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    Break;
  case 'Spoon':
    console.log('A spoon is not an animal!');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not be on the Ark.');
}


// 15. Array Basics
// we can store array of arrays. it is multi dimensional
// to access each element of the array we can use index

var sandwich = ["peanut butter", "jelly", "bread"];

var teams = [["Bulls", 23], ["White Sox", 45]];

console.log(sandwich[0]);

sandwich[1] = "bananas";
console.log(sandwich);

console.log(teams[1][0]);
teams[1][0] = "red socks";
console.log(teams);
console.log(teams[1][0]);

sandwich.forEach(function(element) {
    console.log(element);
});


// 16. 10 Common Array Methods

var arr = ["a", "b", "c"];

arr.push("d");
console.log(arr);

console.log(arr.pop());
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr2);
console.log(arr.concat(arr2));

console.log(arr.join(""));
console.log(arr.join("!"));

console.log(arr.reverse());
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("p"));
console.log(arr);

console.log(arr.slice(1,3));

arr.push("i");
arr.push("f");
console.log(arr);
arr.sort();
console.log(arr);

//splice removes values from arrays
console.log(arr.splice(2, 2, "JS Nuggets")); // first is the starting index, second is the number of items to be removed, third is what needs to be replaced
console.log(arr);


// 17. Copying Arrays

var original = [true, true, undefined, false, null];
console.log(original)

// slice

var copy1 = original.slice(0);// it copies starting from the index number specified in slice()
console.log(copy1)

// spread operator

var copy2 = [...original];
console.log(copy1, copy2);

// DEEP copying
// it is used for copying multi dimensional arrays

var deepArray = [["Ashik"]];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push("is great");// even though we make changes in shallowcopy it is changed in deeparray as well
console.log(deepArray[0], shallowCopy[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0])


// 18. Random numbers & parseInt 

console.log(Math.random());

console.log(Math.floor(Math.random() * 20));
console.log(Math.ceil(Math.random() * 20));

function randomRange(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
console.log(randomRange(1, 9));

console.log(parseInt("007", 2));
console.log(parseInt("abc", 2));
console.log(parseInt("11", 2));


// 19. For Loops

// for ([initialization]; [condition]; [final-expression]) {}

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

var ourArray = [];
for (var i = 0; i < 5; i++) {
  if (i > 2) break;
  ourArray.push(i);
}
console.log(ourArray);

var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// nested for loops -  a for loop inside a for loop 
var arr = [
 [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
 for (var j=0; j < arr[i].length; j++) {
   console.log(arr[i][j]);
 }
}


// 20. While, Do While

// both r similar. while checks condition at beginning. do while does it in end

var n = 0;

while (n < 5) {
  n++;
  console.log("n = " + n);
}

var n = 0;
// using continue to stop commands below continue
while (n < 5) {
  n++;
  if (n == 3) continue;
  console.log("n = " + n);
}

var n = 0;

//using break to exit loop

while (n < 5) {
    n++;
    if (n == 3) break;
    console.log("n = " + n);
  }

//do while
  
  var i = 0;
  
  do {
    i++;
    console.log("i = " + i);
  } while (i < 5);
  
// use the command below  to avoid infinite loops
// &turn_off_js=true

