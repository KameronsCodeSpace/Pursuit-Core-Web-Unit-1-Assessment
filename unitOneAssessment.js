let assert = require('assert')

// Question One:

// Write a function called isOdd that returns whether or not a number is odd.
// If something that is not a number is passed in, return false.

const isOdd = (num => {

if (!isNaN(num)) {
  if (num % 2 !== 0) {
    return true
  } else {
    return false
  }
} else {
  return false
}
})

// Uncomment out the next line to test your solution
runQ1Tests()


// Question Two:

// Write a function called numberOfDigits that returns how many digits are in a given number

// My work
// let num = 123;
// let arrayNum = num.toString();
//
// console.log(arrayNum.length);

const numberOfDigits = (el => {
  let numDigits = el.toString();
    return numDigits.length;
})

// Uncomment out the next line to test your solution
runQ2Tests()

// Question Three:

// Write a function called disemvowel that removes all of the vowels from a string.
// Treat y as a consonant, not a vowel

let word = 'Pizza';

// console.log(word.split(''))

// My Work
// let splitWord = word.split('');
// let vowels = 'aeiouAEIOU';
// let finishedWord = [];
//
// for (let i = 0; i < splitWord.length; i++) {
//   if (!vowels.includes(splitWord[i])) {
//       finishedWord.push(splitWord[i]);
//   }
// }
// console.log(finishedWord);

const disemvowel = (word => {
  let splitWord = word.split('');
  let vowels = 'aeiouAEIOU';
  let finishedWord = [];

  for (let i = 0; i < splitWord.length; i++) {
    if (!vowels.includes(splitWord[i])) {
        finishedWord.push(splitWord[i]);
    }
  }

  return finishedWord.join('');
})

// Uncomment out the next line to test your solution
runQ3Tests()

// Question Four:
// Write a function called secondSmallest that returns the second smallest number in an array

// My work
// let array = [1,10,7,90,5,4];
// //since this array doesnt work with my older answer below im resorting to SORT
// let arraySorted = array.sort(function (a, b) {return a - b});
//
// let smallest = array[0];
// let secondSmallestNum = array[1];
//
// for (let i = array.length; i > 0; i--) {
//
//   if (array[i] < smallest) {
//     secondSmallestNum = smallest;
//     smallest = array[i];
//   }
// }
// console.log(secondSmallestNum);
// console.log(arraySorted);


const secondSmallest = (array => {
  let arraySorted = array.sort(function (a, b) {return a - b});

  return arraySorted[1];
})

// Uncomment out the next line to test your solution
runQ4Tests()

// Question Five:
// Write a function called getLocations that takes in an array of objects that look like the array below,
// and returns an array of the strings corresponding to the value of the location property
// The output should be in the same order as the input

// Sample input:
// let array = [{location: "Algeria", population: 41}, {location: "Belize", population: 0.4}, {location: "China", population: 1386}, {location: "Denmark", population: 6}]

// Sample output:
// ["Algeria", "Belize", "China", "Denmark"]

// console.log(object[0].location)

// let newObject = [];
//
//   for (let value of array) {
//     newObject.push(value.location);
//     // newObject[`${key}`] += object[key];
//   }
//   console.log(newObject);

const getLocations = (array => {
  let newObject = [];

    for (let value of array) {
      newObject.push(value.location);
    }
    return newObject;
})

// Uncomment out the next line to test your solution
runQ5Tests()


// Question Six:

// Write a function called onlyOddStrings that takes in an array of strings as input and returns an array that only includes strings with an odd number of characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation

const onlyOddStrings = (arrayOfStrings => {

  let finishedArray = [];

  for (let i = 0; i < arrayOfStrings.length; i++){
      if (arrayOfStrings[i].length % 2 !== 0) {
          finishedArray.push(arrayOfStrings[i]);
      }
  }

  return finishedArray;
})

// Uncomment out the next line to test your solution
runQ6Tests()


// Question Seven:

// a.
// Make a class called Day
// Give it two properties set by the constructor named temperature and weather
// Give it a method named getDescription that returns a string in the format described below

// Example
// let myDay = Day(80, "sunny")
// myDay.getDescription() // returns "It is 80 degrees and sunny"

class Day {
  constructor(temperature, weather){
    this.temperature = temperature,
    this.weather = weather
  }

  getDescription(){
    return `It is ${this.temperature} degrees and ${this.weather}`
  }
}

// let myDay = new Day(80, 'Sunny');
// console.log(myDay.getDescription() + '\n');

// Was checking if I still remembered how to create a class. Still got it!
// let monday = new Day(78, 'hot')
// console.log(monday);

//b.
// Make a function called getAllDayDescriptions that takes in an array of Day objects and returns an array of their descriptions.  Use a higher-ordered function (e.g map, filter, reduce, every, sort) in your implementation.
// The output should be in the same order as the input

// let myArr = [
//   new Day(50, "raining"),
//   new Day(99, "sunny"),
//   new Day(24, "snowing")
// ]
// [
//   "It is 50 degrees and raining",
//   "It is 99 degrees and sunny",
//   "It is 24 degrees and snowing",
// ]

function getAllDayDescriptions (array) {
  let arrayOfDescriptions = [];

  array.forEach(el => {
    arrayOfDescriptions.push(el.getDescription());
    // console.log(arrayOfDescriptions);
    // return arrayOfDescriptions;
  });
  return arrayOfDescriptions;
}

//I knew forEach didn't use returns but I also knew I had to use a return for the test to run. Trial and error got me the answer >.<!
// getAllDayDescriptions(myArr);

// Uncomment out the next line to test your solution
runQ7Tests()



// The code below is used to test your solutions.  Feel free to look over it, but do not change any of it.

function TestCase(input, output) {
  this.input = input
  this.output = output
  this.formattedInput = () => {
    return JSON.stringify(this.input)
  }
}

function runTests(questionNum, testCases, testCallback) {
  console.log(`Question ${questionNum} Tests`)
  try {
    for (let testCase of testCases) {
      console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
      assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
    }
    console.log(`All Question ${questionNum} tests passed!\n`)
  }
  catch(error) {
    if (error.expected === undefined) {
      console.log("An unexpected error occurred running the test")
      console.log(error)
    } else {
      console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
    }
  }
}

function runQ1Tests() {
  let testCases = [
    new TestCase(1,true),
    new TestCase(3, true),
    new TestCase(5, true),
    new TestCase(7, true),
    new TestCase("3", true),
    new TestCase(0, false),
    new TestCase(2, false),
    new TestCase(4, false),
    new TestCase(10, false),
    new TestCase(NaN, false),
    new TestCase("hi", false)
  ]
  runTests("One", testCases, isOdd)
}

function runQ2Tests() {
    let testCases = [
      new TestCase(4,1),
      new TestCase(14,2),
      new TestCase(8473,4),
      new TestCase(73746, 5)
    ]
    runTests("Two", testCases, numberOfDigits)
}

function runQ3Tests() {
  let testCases = [
    new TestCase("hello", "hll"),
    new TestCase("What's up?", "Wht's p?"),
    new TestCase("aeaeae", ""),
    new TestCase("y doesn't count", "y dsn't cnt"),
    new TestCase("CAPITAL LETTERS DO COUNT", "CPTL LTTRS D CNT"),
  ]
  runTests("Three", testCases, disemvowel)
}

function runQ4Tests() {
  let testCases = [
    new TestCase([5,1,4,2,5,6], 2),
    new TestCase([1,10,7,90,5,4], 4),
    new TestCase([2,1,4,90,5,6], 2),
    new TestCase([1,3,4,90,5,6], 3)
  ]
  runTests("Four", testCases, secondSmallest)
}

function runQ5Tests() {
  let testCases = [
    new TestCase(
      [
        {location: "Algeria", population: 41},
        {location: "Belize", population: 0.4},
        {location: "China", population: 1386},
        {location: "Denmark", population: 6}
      ],
      ["Algeria", "Belize", "China", "Denmark"]
    ),
    new TestCase([{location: "England", population: 56}], ["England"]),
    new TestCase([], [])
  ]
  runTests("Five", testCases, getLocations)
}

function runQ6Tests() {
  let testCases = [
    new TestCase(
      ["a", "bb", "ccc", "dddd", "eeeee"],
      ["a", "ccc", "eeeee"]
    ),
    new TestCase(
      ["Four", "score", "and", "seven", "years", "ago"],
      ["score", "and", "seven", "years", "ago"]
    ),
    new TestCase(
      ["The", "only", "thing", "we", "have", "to", "fear", "is", "fear", "itself"],
      ["The", "thing"],
    ),
    new TestCase(
      ["one", "two", "three", "four"],
      ["one", "two", "three"]
    ),
    new TestCase([],[]),
    new TestCase(["a"],["a"]),
    new TestCase(["to"],[])
  ]
  runTests("Six", testCases, onlyOddStrings)
}

function runQ7Tests() {
  let testCases = [
    new TestCase(
      [
        new Day(50, "raining"),
        new Day(99, "sunny"),
        new Day(24, "snowing")
      ],
      [
        "It is 50 degrees and raining",
        "It is 99 degrees and sunny",
        "It is 24 degrees and snowing",
      ]
    ),
    new TestCase(
      [
        new Day(31, "sleeting"),
        new Day(88, "partly cloudy")
      ],
      [
        "It is 31 degrees and sleeting",
        "It is 88 degrees and partly cloudy",
      ]
    ),
    new TestCase([], [])
  ]
  runTests("Seven", testCases, getAllDayDescriptions)
}
