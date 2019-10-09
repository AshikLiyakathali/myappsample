// 21. for... in / for... of */

// usage

// for (variable in object) {
//   statements
// }

// for (variable of object) {
//   statement
// }

let person = {fname:"Beau", lname:"Carnes", arms:2}; 

let arr = [3, 5, 7];
arr.foo = 'hello';

let text = "";
for (let x in person) {
  text += person[x];
  console.log(x);
};
console.log(text);

for (let i in arr) {
  console.log(i);
};

for (let i of arr) {
  console.log(i);
};


// 22. Array iteration: 8 methods

// forEach
var a=[1, 2, 3];
    a.forEach(function (item, index) {
    console.log(item, index);
  });
  
 // map
 const three = [1, 2, 3];
 const doubled = three.map(function (item) {
   return item * 2;
 });
 console.log(doubled);
 
 
 // filter
 const ints = [1, 2, 3];
 const evens = ints.filter(function (item) {
   return item % 2 === 0;
 });
 console.log(evens);
 
  // reduce
  const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum)
  
  
  // some
  const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
  });
  console.log(hasNegativeNumbers);
  
  
  // every
  const allPositiveNumbers = [1, 2, -3].every(function (item) {
    return item > 0;
  });
  console.log(allPositiveNumbers);
  
  
  // find
  const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const found = objects.find(function (item) {
    return item.id === 'b';
  });
  console.log(found);
  
  
  // find index
  const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';
  });
  console.log(foundIndex)
  
  
// 23. Objects

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"])

myCar["Do I like?"] = "I hate my car.";
console.log(myCar["Do I like?"]);

function showProps(obj, objName) {
var result = "";
for (var i in obj) {
// obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

// Creation: object initializer

var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};

// Creation: constructor function

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);

//Creation: Object.create

var Animal = {
  type: "Invertebrates", 
  displayType: function() {  
    console.log(this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.displayType(); 

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();
 

// 24. Objects part 2

// using objects for lookups

var alpha = {
    1: 'Z', 
    2: 'Y',
    3: 'X',
    4: 'W'
}
console.log(alpha[2]);

//remove object properties

let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};
delete dishes.cups;
console.log(dishes);

//testing objects for properties

console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

//accessing and mosifying nested objects

var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
        }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

//generate an array of all object keys

console.log(Object.keys(ourStorage));
