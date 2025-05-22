/* eslint-disable */

/*
// for,do,while---
let a = [10, 20, 30]; // 0,1,2
let l = a.length;
let i;
// for (i = 0; i < l; i++) {
//   console.log('index --> ', i );
//   console.log('value --> ', a[i]);
// }

i = 0;
// while (i < l) {
//   console.log('index --> ', i);
//   console.log('value --> ', a[i]);
//   i++;
// }
// do {




//   console.log('index --> ', i);
//   console.log('value --> ', a[i]);
//   i++;
// } while (i < l);

function test(num) {

  let e = (num % 2 === 0) ? 'even' : 'odd';
  console.log('item --> ', e);

  switch (num) {
    case 1:
      console.log('one');
      break;
    case 2:
      console.log('two');
      break;
    case 3:
      console.log('three');
      break;
    case 4:
      console.log('Four');
      break;
    default:
      console.log('Enter a valid number');
      break;
  }
}

test(3);

let x = () => {

};


const square = (number) => number * number;

let result = square(4);
console.log('item --> ', result);

const logAge = (name, age) => {
  var x = 10;
  console.log(`name is : ${name} age is : ${age}`);
};
logAge('joe', 25);


let x = 10; // global scope
const logAge = () => {
  let y = 10; // function scope
  if (true) {
    let z = 20; // block scope
    console.log('item --> ', z);
  }
  console.log('item --> ', y);
};

console.log('item --> ', x);
logAge();

//CLOSURE

function outer() {
  let counter = 0; //MA

  let inner = () => {
    counter = counter + 1;
    return counter;
  }

  return inner;
}

let result = outer();

console.log(typeof (result));
console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3



let x = { a: 10 }; // literal // direct value
console.log('type --> ', typeof (x));
console.log('key a --> ', x.a);
console.log('calling method', x.toString());



let x = new Object(); // instance
x.a = 10;
console.log('type --> ', typeof (x));
console.log('x --> ', x );
let x = [10]; // literal
console.log('x --> ', x );
let x = new Array(); // instance
x[0] = 10;
console.log('x --> ', x );

// constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model; 
  this.year = year;
}
const c1 = new Car("Honda", "Accord", 1998);
const c2 = new Car("Maruthi", "Swift", 1999);

console.log(auto instanceof Car);
console.log(auto);

for (let key in x) {
  const value = x[key];
  if (typeof (value) === 'function') {
    value(); // there is no context;
  }
}


// context
let x = { // reference type or object
  'a': 10,
  'b': function () {
    console.log('this is pointing to --> ', this);
    console.log('print a --> ', this.a);
    console.log('print b --> ', this.b);
  }
};

x.b(); // in the context of x



// constructor
function Person(n) {
  this.name = n;
  this.printName = function () {
    console.log('name --> ', this.name);
  }
}

// instances
let x = new Person('ramesh');
console.log('x --> ', x);
// console.log('property name --> ', x.name);
x.printName();

let y = new Person('kamesh');
console.log('y --> ', y);
// console.log('property name --> ', x.name);
y.printName();

*/





























































































