if(true) {
    var x = 5;
}

console.log(x);

const word = "hello";
const otherWord = "world";

// Objects
let inventoryCount = {

    banana: 14,
    apple: 2

};

inventoryCount.apple
inventoryCount.banana

// Dynamically typed where values can be changed as required and on the go

const inventoryCount = "banana";

// Equality and Sameness - Casting is the reason that it works in JS
const one = 1;
const otherOne = "1";

const result = one == otherOne;

// Array - 0 based arrays in JS
// add and remove stuff from both sides

const arr = [
    'banana', 'apple', 'green'
]

arr.push('orange') // end of the array
arr.unshift('kale') // start of the array
arr.pop() // drops the last thing in the array
arr.slice()
arr.shift() // removes first element from the array

//FUNCTIONS: Can take arguments

function add100(num) {
    return num + 100;
}

// declaring a function like a variable
const add100 = function(num) {
    return num + 100;
}
const result = add100(55);

// If a function is called before it is declare -- its called Hoisting

// Example for a template literal
const hisName  = 'hunter';
const welcomeText = `
    hello
    multiple line text..
    ${hisName} + '!!!!!'
`
welcomeText

// truthy or falsy

let bananaCount = 0;
let banana;

if(bananaCount) {
    banana ='green';
} else {
    banana = 'yellow';
}

banana


// Alert: For debugger but Avoid using them
// Debugger -- typing the word directly

// For.. In Unique loop
const fruitObj = {
    banana: 'yellow',
    apple: 'red' ,
    orange: 'not-orange',
}

// as we iterate it produces the value of the key instead of the value in the object
for(fruit in fruitObj) {
    fruit
}

// For.. of loop --> enumerable
const fruitList = ['banana', 'apple' , 'orange']

// 'in' for the object and 'of' for the index
// as we iterate it produces the index of the of the value in the object
for(fruit of fruitList) {
    fruit
}

// Web Components for repetitive elements that go across multiple pages of 
// your webste
//      -- Create custom elements with JS
//      -- Shadow DOM - like a sub-DOM that encapsulates any logic or styles like in the header
//      -- HTML template -- string or object that helps in creating a reusable HTML tag
