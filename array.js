// Arrays are used when there is a need to use many variables of the same type. 
// It can be defined as a sequence of objects which are of the same data type. 
// It is used to store a collection of data, 
// and it is more useful to think of an array as a collection of variables of the same type.
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.  
// in javaScript , arrays used in number index or object used in name index.

//  const cars = ['Honda','Hundai','BMW','Szuzuki'];
//  console.log (cars[0]);= honda
// The length Property
// The length property of an array returns the length of an array (the number of array elements).
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;  4
// Accessing the First Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[0];  banana
// Accessing the Last Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];  mango

// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.


// Looping Array Elements
// One way to loop through an array, is using a for loop:


// const fruits = ["Banana", "Orange", "Apple"];
//          or
//  New element can also be added to an array using the length property:
// fruits.push("Lemon"); =Banana,ornage,apple,lemon
 /*
 javaScript Array Pop()
The pop()method  removes the last element from an Array
const fruits = ["Banana","Orange","Apple","Mango"];
let fruit = fruit.pop(); (Banana, Orange, Apple)
*/
/*
JavaScript Array Push()
The push() method adds a new element to an array at the end
const fruits = ["Banana","Orange","Apple","Mango"];
fruits.push("kiwi");  Banana,Orange,Apple,Mango,Kiwi
*/
// example
/*
shifting Element
shifting is equvalent to popping, but working on the first element instead of the last 
const fruit = ["Banana","Orange","Apple","Mango"];
fruits.shift(); orange,Apple,Mango
*/
// const fruit = ["Banana","Orange","Apple","Mango"];
// undefined
// const(0)
// VM623:1 Uncaught SyntaxError: Unexpected token '('
// fruit
// (4) ['Banana', 'Orange', 'Apple', 'Mango']
// fruit.shift()
// 'Banana'
// fruit
// (3) ['Orange', 'Apple', 'Mango']
// fruit.push("kiwi");

// 4
// fruit
// (4) ['Orange', 'Apple', 'Mango', 'kiwi']

/*JavaScript Array unshift()
The unshift() method adds a new element a new to an array ( at the beginning),and 'unshifts'older elements.
const Name = ["Ram","Bikes","Rajan"];
(3) ['Ram', 'Bikes', 'Rajan']
Name.unshift("Hari");
(4) ['Hari', 'Ram', 'Bikes', 'Rajan']
Name[2]

'Bikes'
*/
// javaScript Array splice()
// the splice()method can be used to add new items to an array
// const cityName =["Kathmandu","Pokhara","Lumbini","Dharan"];
// cityName.splice(2,0, "Butwal","Nepalgung");
// cityName
// (6) ['Kathmandu', 'Pokhara', 'Butwal', 'Nepalgung', 'Lumbini', 'Dharan']

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Butwal" , "Nepalgung") define the new elements to be added.


// const cityName =["Kathmandu","Pokhara","Lumbini","Dharan"];
// undefined
// cityName.splice(0,1);
// ['Kathmandu']
// cityName
// (3) ['Pokhara', 'Lumbini', 'Dharan']

// cityName
// (3) ['Pokhara', 'Lumbini', 'Dharan']
// cityName.splice(1)
// (2) ['Lumbini', 'Dharan']

// const cityName =["Kathmandu","Pokhara","Lumbini","Dharan"];
// cityName.splice(3)
// [Dharan]

/*
const cityName =["Kathmandu","Pokhara","Lumbini","Dharan","Bharatpur"];
cityName.splice(1,3)
[Pokhara,Lumbini,dharan]
*/

