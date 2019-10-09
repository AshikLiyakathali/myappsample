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


// 25. AJAX 

// AJAX = Asynchronous JavaScript And XML

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", true);
    xhttp.send();
  }
  
   
  //Adding "https://cors-anywhere.herokuapp.com/" prevents the following error:
  //XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://s.codepen.io' is therefore not allowed access.


  // 26. //JS Nuggets: JSON

// example
var myJSON = {
    "name": {
        "first": "Beau",
        "last": "Carnes"
    },
    "age":33,
    "skills": [ "juggling", "stiltwalking", "coding" ],
    "married": true,
    "superpowers": null
 }

// stringify method

var stringified = JSON.stringify(myJSON);
console.log(stringified);


// parse method

var stringJSON = '{ "name":"Beau", "kids":2,"state":"Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);


// 27. Closures

function makeFunc() {
    var name = "JS Nuggets";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
 myFunc();

 
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  })();
  
  console.log(counter.value());
  counter.increment();
  counter.increment();
  console.log(counter.value()); 
  counter.decrement();
  console.log(counter.value());


  // 28. this keyword

  console.log(this.document === document);

  console.log(this === window);
  
  this.a = 37;
  console.log(window.a); 
  
  
  function f1() {
     return this;
    }
    console.log(f1() === window);
    
  function f1() {
    'use strict';
    return this;
  }
  console.log(f1() === window);

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};
console.log(add.call(o, 5, 7));
console.log(add.apply(o, [10, 20]));


function f() {
  return this.a;
}

var g = f.bind({a: 'unicycle'});
console.log(g());

var h = g.bind({a: 'cereal'}); // won’t work a second time
console.log(h());

var o = {a: 8, f: f, g: g, h: h};
console.log(o.f(), o.g(), o.h());



var o = {
  traditionalFunc: function () {
    console.log('traditionalFunc this === o?', this === o);
  },
  arrowFunc: () => {
    console.log('arrowFunc this === o?', this === o);
    console.log('arrowFunc this === window?', this === window);
  }
 };
 
 o.traditionalFunc();
 
 o.arrowFunc();
 
 
 var o = {
   prop: 37,
   f: function() {
     return this.prop;
   }
 };
 
 console.log(o.f()); // logs 37
 
 var o = {prop: 23};
 
 function independent() {
   return this.prop;
 }
 
 o.f = independent;
 
 console.log(o.f());


// 29. Promises

// Basic usage
var p = new Promise(function(resolve, reject) {
	
	// Do an async task async task and then...

	if(good_condition) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() { 
	/* do something with the result */
}).catch(function() {
	/* error */
})


// Complete example

var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + ': Started - Sync code started');

  var p1 = new Promise(function(resolve, reject) {
    console.log(thisPromiseCount + ': Promise started - Async code started');
    // This is only an example to create asynchronism
    window.setTimeout(
      function() {
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  p1.then(function(val) {
    console.log(val + ': Promise fulfilled - Async code terminated');
  }).catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

  console.log(thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();


// 30. Notifications API

//Notification.requestPermission();

//new Notification("Subscribe to JS Nuggets!");

function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    notify();
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        notify();
      }
    });
  }
  
  function notify() {
    var notification = new Notification('TITLE OF NOTIFICATION', {
      icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
      body: "Hey! You are on notice!",
    });

    notification.onclick = function () {
      window.open("http://carnes.cc");      
    };
    setTimeout(notification.close.bind(notification), 7000); 
  }

}
notifyMe();


// 31. Immediately Invoked Function Expression (IIFE)  

(function () {
  console.log("My favorite number is 3");
})();

(favNumber = function (num = 3) {
  console.log("My favorite number is " + num);
})();

favNumber(5);


var a = 2;

(function() {
  var a = 3;
  console.log(a);
})();

console.log(a);

let b = 2;

{
  let b = 3;
  console.log(b);
}

console.log(b);


// 32. Strict Mode

"use strict";

function myFunction() {
  "use strict";
	var y = 3.14;  
}

// CONVERTING MISTAKES INTO ERRORS

var x = 3.14;
delete x;   

var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;

var obj = {get x() {return 0} };
obj.x = 3.14;

delete Object.prototype;

function sum(a, a, c) { 
  'use strict';
  return a + b + c; 
}

// WITH AND EVAL CHANGES

var x = 17;
with (obj) {
  x; // Is this var x or obj.x?
}

eval("var x;")

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);

// SECURING JAVASCRIPT


// 33. Check if a property is in an object

var myObject = {
  name: 'JS Nuggets'
};

if (myObject.name) {
  console.log("it is in!")
}

console.log(myObject.hasOwnProperty('name'));
console.log('name' in myObject);

console.log(myObject.hasOwnProperty('valueOf'));
console.log('valueOf' in myObject);


// 34. setTimeout and setInterval

// setTimeout
var timeoutID = setTimeout(bye, 3000);

console.log('hello');

clearTimeout(timeoutID);

function bye() {
  console.log('goodbye');
}

// setInterval

var count = 0
var intId = setInterval(counter, 1000);
 
function counter() {
  console.log(++count);
}


// 35. Try, catch, finally 

try {
  console.log('Start of try runs');
  
  unicycle;

  console.log('End of try runs -- never reached'); 

} catch(err) {

  console.log('Error has occured: ' + err); 

} finally {
  console.log('This is always run'); 
}

console.log('...Then the execution continues');


let json = '{ "age": 30 }';
 
try {
 
  let user = JSON.parse(json); 
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
 
  console.log( user.name );
 
} catch(e) {
  console.log( "JSON Error: " + e ); 
}


// 36. Dates

var d1 = new Date()
console.log(d1.toTimeString())

var d2 = new Date(2017, 1, 3, 42, 43, 23, 23)
console.log(d2.toString())

var d3 = new Date(86400000)
console.log(d3.toString())

var d3 = new Date(929397621000)
console.log(d3.toString())

var d4 = new Date("October 13, 2019 11:13:00")
console.log(d4.toString())

var d4 = new Date("2015-03-25")
console.log(d4.toString())

var d4 = new Date("2015-03")
console.log(d4.toString())

var d4 = new Date("2015")
console.log(d4.toString())

var d4 = new Date("03/25/2015")
console.log(d4.toString())

var d4 = new Date("Mar 25 2017")
console.log(d4.toString())

console.log(d4.getDate())

console.log(d4.getDay())

console.log(d4.getMinutes())

d4.setFullYear(2020)
console.log(d4.toString())


var start =  new Date();
doSomething();
var end = new Date();

var elapsed =  end.getTime() - start.getTime();
console.log(elapsed);

function doSomething() {
  for(var i=0; i < 100000000; i++) {

  }
};









