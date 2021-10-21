// ===================================================================
// Array functions
const favNumbers = [7, 10, 30, 100];

// Modify each element in a single way - say multiply by 2
// Usual : for loop
// in JS: Map & Filter

// Map: Takes a call back function and applies the function to each number
const modified = favNumbers.map(num => num * 2); // parentheses around num required only if there are no input args
// can also take a function
function timesTwo(num) {
    return num * 2
}

const modified2 = favNumbers.map(timesTwo)

// FILTER

function lessThanTen(num) {
    return num < 10;
}

const modified3 = favNumbers.filter(lessThanTen);

// ===================================================================
// Arrow function
// removal of the flower brackets will still make the return happen 
const appleFunc = (num) =>
 {
     return 100 + num;
 }

 const appleFunc = (num) => 100 + num

 const apples = appleFunc(15);
 setTimeout(() => console.log('hello'), 300) // anonymous function

// ===================================================================
// Object shorthand
const titanic = 1995;
const starwars = 1970;

const movies = {
    titanic,
    starwars,
} // gives you an array of objects as key-value pairs based on the assigned values

// ===================================================================
// Destructuring
const movies = {
    matrix: 1997,
    titanic: 1999,
    avengers: 2010
}

const {matrix, avengers} = movies; // all its doing is movies.matrix
// ===================================================================
// Array spreading

const movies = {
    matrix: 1997,
    titanic: 1999,
    avengers: 2010
}

const moreMovies = {
    avengers2 = 2020,
    ...movies // takes all the movies from movies array and copy/pastes them in the
    //more movies array
}

// ===================================================================
// Syntactic Sugar

// Tenary Operator if you know exactly what you want in value
// decides whether its a truthy or falsy
const banana = num === 1 ? 'green' : 'blue';


let banana = 'yellow';
const num = 1;

if(num === 1) {
    banana = 'green'
} else if (num === 2) {
    banana = 'black'
}

// ===================================================================
// Advanced JavaScript
// Classes & Prototypes
const bananas = [1,2,4,5];
Array.prototype.pop = function() {
    return 100;

}
// single argument inside another function
setTimeout(function() {
    console.log('hello')
}, 300)

// ===================================================================
// Boolean context
// truthy/ falsy

// if you do an if statement with a 
let number = 0;
let banana = 'yellow';

if(number) {
    banana = 'green'
}

// ===================================================================

// Comparisons:
// '=' assignment of variable
// '==' is true ==> in background its casting --> converting the type
// '===' datatype comparisons


// ===================================================================
// functions:

function returnApple() {
    return 'apple';
}

const appleStr = returnApple();

// assign functions to Variables
let appleFunc = function() {
    return 'another apple';
}

appleFunc = 'a third apple'; /
const appleStr = appleFunc();
 
// ===================================================================
// const: is not for internal values - the values can be changed by accessing them
// it can't be reassigned or re-declare
const object = {
    bananaColor: 'yellow',
    appleColor: 'red',
    appleCount: 10,
};

object.appleCreator = function() {
    return 'apple'
};

object['appleCount'] = 11;

object.appleColor = 'green';

const appleStr = object.appleCreator();

