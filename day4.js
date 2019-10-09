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