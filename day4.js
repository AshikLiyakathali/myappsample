// 1. Const vs Let vs Var

// const - for values that never change

const Pi = 3.14
// Pi = 1 //error
console.log(Pi);


// let - for block-level variables

for(let i = 0; i < 3; i++) {
  console.log(i);
}
// console.log(i) //error

// var - for variables available to entire function or program

console.log(j)
for(var j = 0; j < 3; j++) {
  console.log(j);
}
console.log(j)


// 2. Classes**

//**class declaration**
class Person {
    constructor(name, year_born) {
      this.name = name;
      this.year_born = year_born;
    }
    
    get age() {
      return this.calcAge();
    }
  
    calcAge() {
      return new Date().getFullYear() - this.year_born;
    }
    
    what() {
      console.log(this.name + ' is a person.');
    }
    
    static arms() {
      return 2;
    }
  }
  
  var me = new Person("Beau", 1983);
  console.log(me.name + " was born in " + me.year_born + "!")
  me.what();
  console.log(me.name + " has " + Person.arms() + " arms!")
  
  class Juggler extends Person {
    what() {
      super.what();
      console.log(this.name + " is a juggler.");
    }
  }
  
  var you = new Juggler ("Jay", 1980);
  me.what();
  you.what();
  
  
  //**class expressions**
  // unnamed
  var Person2 = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };
  
  // named
  var Person3 = class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  };


// 3. Symbols

// Creation

let symbol1 = Symbol('symbol2');
let symbol2 = Symbol('symbol2');
console.log(symbol1 === symbol2);
console.log(typeof symbol1);
console.log('symbol: ' + symbol1.toString());


// Use case 1: Symbols as property keys
   const MY_KEY = Symbol();
    let obj = {};
    
    obj[MY_KEY] = 123;
    console.log(obj[MY_KEY]);


// Use case 2: constants representing concepts

const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: '+color);
    }
}

getComplement(COLOR_RED);

// 4. // 4. Template literals

// multi-line strings

console.log(`string test line 1
string test line 2`)

console.log(`string test line 1


string test line 2`)

// expression interpolation

var a = 5;
var b= 10;
console.log(`fifteen is ${a + b} and\nnot ${2 * a + b}.`)
console.log(`fifteen is ${a + b} and
not ${2 * a + b}.`)

//tagged template literal

function tag(strings, ...values) {
  console.log(strings);
  console.log(values);

  return "Ashik";
}

tag `Hello ${a+b} world ${a*b}`

function template(strings, ...keys) {
  console.log(strings);
  console.log(keys);
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
console.log(t2Closure('Hello', {foo: 'World'}));  // "Hello World!"


// 5. Proxies!

// Syntax: var p = new Proxy(target, handler);

// Example 1
var handler = {
  get (target, key) {
    return key in target ? target[key] : 37;
    }
};

//without proxy
var p = {};
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);

//with proxy

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);

// Example 2
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (typeof value !== 'number' || Number.isNaN(value)) {
        console.log('Age must be a number')
      }
      if (value < 0) {
        console.log('Age must be a positive number')
      }
    }

    obj[prop] = value;
  
    return true;
  }
};

let person = new Proxy({}, validator);
person.age = 'young';
console.log(person.age)
person.age = -30;
console.log(person.age)
person.age = 100;
console.log(person.age)
  
 

// 6. Spread Operator / Rest Operator

// add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

// pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}

var args = [0, 1, 2, 3];
addThreeNumbers(...args);

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);

// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.concat(arr2);
console.log(arr1.concat(arr2));
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);

// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr)


// 7. Arrow Functions

//Syntax
//(param1, param2) => { statements };
//(param1, param2) => expression
//(param1, param2) => { return expression; };

//(singleParam) => { statements }
//singleParam => { statements }

//() => { statements }
//() => expression
//() => { return expression; };

//(param1, param2, paramN) => expression 

// NORMAL FUNCTION

var multiply = function(x, y) {
  return x * y;
}; 
 
// ARROW FUNCTION 

var multiply = (x, y) => { return x * y };

// or

var multiply = (x, y) => x*y;
// Example

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
  return material.length;
});

var materialsLength2 = materials.map((material) => {
  return material.length;
});

var materialsLength3 = materials.map(material => material.length);

// No binding of 'this'

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // In a normal function, 'this' refers to global object, here it properly refers to the person object
    console.log(this.age)
  }, 3);
}

var p = new Person();

// Returning object literals

var func = () => ({foo: 1});

// Line breaks

var func = () => 1; 



// 8. Destructuring

// Assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

const {x, y, z} = voxel;
console.log(x);

const {x : a, y : b, z : c} = voxel;
console.log(b);

// Assign variables from nested objects

const nest = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};

const { start : { x: startX, y: startY }} = nest;
console.log(startX);

// Assign Variables from Arrays

//const [q,,, r] = [1, 2, 3, 4, 5];
//console.log(q, r);

// Rest Operator to Reassign Array Elements

const [q, r, ...rest] = [1, 2, 3, 4, 5];
console.log(q, r);
console.log(rest);

// Pass an Object as a Function's Parameters

const profileUpdate = ({ name, age }) => {
  // do something with these variables
}


// 9. Maps

let myMap = function() {
	this.collection = {};
	this.count = 0;
	this.size = function() {
		return this.count;
	};
	this.set = function(key, value) {
		this.collection[key] = value;
		this.count++;
	};
	this.has = function(key) {
		return (key in this.collection);
	};
	this.get = function(key) {
		return (key in this.collection) ? this.collection[key] : null;
	};
	this.delete = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};
	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};
	this.clear = function() {
		this.collection = {};
		this.count = 0;
	};
};

let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {},
    keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value')

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));


// 10. Import / Export

// NAMED EXPORTS

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

// IMPORT PART OF A MODULE

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); 
console.log(diag(4, 3)); 

// IMPORTING COMPLETE MODULE

//------ main.js ------
import * as lib from 'lib';
console.log(lib.square(11));
console.log(lib.diag(4, 3)); 


// IMPORTING WITH MORE CONVENIENT ALIAS
import {reallyReallyLongModuleMemberName as shortName}
  from 'my-module';

// SINGLE DEFAULT EXPORT

//------ myFunc.js ------
export default function () { ··· } // no semicolon!

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();

