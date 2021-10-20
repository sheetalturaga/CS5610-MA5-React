// Author: Sheetal Turaga


// PROBLEM 1 - findBiggestNumber
/*
  findBiggestNumber
    search the input (map) for the biggest number input
    map, an array of array of integers, nulls or undefined output
    an integer representing the biggest number in int.  
    if there is no valid output, return undefined 
  note: I have provided some code within the function to help you out
*/
function findBiggestNumber(map) {

  // Flattened the map into an array of intergers
  let numArray = map.reduce(function(accumulator, currVal) {
    return accumulator.concat(currVal)
  }, []);

  // Filtering out empty elements from the flattened array
  let filteredArray = numArray.filter(Number);

  for(let i = 0; i <= filteredArray.length; i++) {
    if(filteredArray.length === 0){
      return undefined;
    }
    else {
      var biggestInt = filteredArray.reduce(function(x, y) {
        return Math.max(x, y);
      }, 0);
    }
    return biggestInt;
  }
}

// PROBLEM 2 - balancedString

/*
  balancedString
    returns true if the number of all of the characters in the string
    is the same
    ex - balancedString("xxxyyzzz") => false
    ex - balancedString("abccbaabccba") => true
    input str, a string made of up 0 to infinite lower-case characters.  
    will never be undefined, null, etc. output
    true if the number of all the characters in the string is the same
    otherwise, false
*/

function balancedString(str) {
    // Assuming the input string is all in lower case as mentioned, 
    // using split to split the string between each character
    let arrOfStrings = str.split('');
    let mapOfCharCount = new Map();
    let charCount = 1;

    if(arrOfStrings.length === 0 || arrOfStrings.length === 1) {
      return true;
    } else {
      for(let i = 0; i <= arrOfStrings.length; i++) {
        // arrOfStrings.length is 0 or 1 ===> true
        // arrOfStrings.length > 1
        //     check if text[i] is in the map
        //     if yes, increment map.value by 1
        //     else, add text[i] to map and value count 1
        // compare all map.values to see if they are the same
        // if yes, it's true that str is balanced
        // else, its false, that str is not balance
        if(arrOfStrings[i] === arrOfStrings[i + 1]) {
          if(mapOfCharCount.has(arrOfStrings[i])) {
            mapOfCharCount.set(arrOfStrings[i], (mapOfCharCount.get(arrOfStrings[i]) + 1)); 
          } else {
            mapOfCharCount.set(arrOfStrings[i], 1);
          }
        } else {
            if (mapOfCharCount.has(arrOfStrings[i])) {
              mapOfCharCount.set(arrOfStrings[i], (mapOfCharCount.get(arrOfStrings[i]) + 1));
            } else {
              mapOfCharCount.set(arrOfStrings[i], 1);
            }
          }
          return mapOfCharCount;
        }
      }

    // traverse the values in the map to see if
    // they are equal
    const mapValues = mapOfCharCount.values();
    for(let i  = 1; i <= mapValues; i++) {
      if(mapValues[0] !== mapValues[i]) {
        return false;
      }
      return true;
      }
  }


// PROBLEM 3 - additivePersistence

/*
  additivePersistence
    calculates and returns a number that represents how many loops you have to do 
    summing all of its digits until you get a single digit number
    explanation: https://mathworld.wolfram.com/AdditivePersistence.html
    ex - additivePersistence(1234) => 2
  input
    num, an integer between 1 and Number.POSITIVE_INFINITY
  output
    an integer as described above
*/
function additivePersistence(num) {

    // Convert the given input into an array of strings
    var numArray = num.toString().split('');
    
    var loopCount = 0; // Initialize the loop count to 0
    while (numArray.length > 1) {
      // traverse the array of strings, convert the strings 
      // into digits at the time of addition 
      // before splitting and continuing the loop
      var numArray = String(numArray.reduce(function(x, y) {
        return Number(x) + Number(y)
      })).split('');
      // console.log(numArray);
      loopCount++;
    }
    return loopCount;
}


// TEST 1 - findBiggestNumber
const grid1 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12]
]

const grid2 = [
    [1, 1, 4, 1],
    [1, 6],
    [1, 2, 1, -3],
]

const grid3 = [
    [1, null, 1, null],
    [1, 0],
    [1, 2, 1, undefined],
]

const grid4 = [
    [-1, null],
    [],
    [0, -2, -1],
]

const grid5 = [
    [],
    [],
    [],
]

console.assert(findBiggestNumber(grid1) === 12, "biggest number should be 12"); 
console.assert(findBiggestNumber(grid2) === 6, "biggest number should be 6");
console.assert(findBiggestNumber(grid3) === 2, "biggest number should be 2");
console.assert(findBiggestNumber(grid4) === 0, "biggest number should be 0");
console.assert(findBiggestNumber(grid5) === undefined, "biggest number response should be undefined");


// TEST 2 - balancedString
console.assert(balancedString("xxxyyyzzz") === true, "'xxxyyyzzz' is balanced")
console.assert(balancedString("xxxyyyzzzz") === false, '"xxxyyyzzzz" is not balanced')
console.assert(balancedString("abccbaabccba") === true, '"abccbaabccba" is balanced')
console.assert(balancedString("abcdefghijklmnopqrstuvwxyz") === true, '"abcdefghijklmnopqrstuvwxyz" is balanced')
console.assert(balancedString("pqq") === false, '"pqq" is not balanced')
console.assert(balancedString("fdedfdeffeddefeeeefddf") === false, '"fdedfdeffeddefeeeefddf" is not balanced')
console.assert(balancedString("www") === true, '"www is balanced')
console.assert(balancedString("x") === true, '"x" is balanced')
console.assert(balancedString("") === true, "'' is balanced")


// TEST 3 - additivePersistence
console.assert(additivePersistence(1234) === 2, 'the additive 1234 should be 2')
console.assert(additivePersistence(13) === 1, 'the additive 13 should be 1') 
console.assert(additivePersistence(9876) === 2, 'the additive 9876 should be 2')
console.assert(additivePersistence(199) === 3, 'the additive 199 should be 3')
console.assert(additivePersistence(1679583) === 3, 'the additive 1679583 should be 3')

console.log("code execution complete!")