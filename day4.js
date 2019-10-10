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
  
  
