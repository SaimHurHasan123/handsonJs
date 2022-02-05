//hi how are you
/* hi how are you bye*/
var myName;
// Setup
var a;

// Only change code below this line
a=7;
var b;
b =a;
var a=9;
var myFirstName ="saim";
var myLastName ="hasan";
// Only change code below this line
var a =5;
var b =10;
var c ="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
// Variable declarations
var studlyCapVar =10;
var properCamelCase ="A String";
var titleCaseOver=9000;

// Variable assignments
 studlyCapVar= 10;
 properCamelCase= "A String";
 titleCaseOver = 9000;

 let catName = "Oliver";
let catSound = "Meow!";
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

var sum = 10 + 10;
console.log(sum);
var difference = 45 - 33;
var product = 8 * 10;
var quotient = 66 / 33;
let myVar = 87;

// Only change code below this line
++myVar;
let myVar = 11;

// Only change code below this line
myVar--;
const myDecimal = 5.7;
const product = 2.5 * 2.0;
const quotient = 4.4 / 2.0; // Change this line
const remainder = 26%12;
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c +=7;
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -=  6;
b -=  15;
c -= 1;
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *=  5;
b *= 3;
c *=10;
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /=  4;
c /= 11;
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
const myStr = "This is the start. " + "This is the end."; // Change this line
let myStr ="This is the first sentence. ";
myStr += "This is the second sentence.";
// Only change code below this line
const myName = "saim";
const myStr = "hasan " +myName+ "Hur" ;
// Change code below this line
const someAdjective = "Ced";
let myStr = "Learning to code is ";
myStr+=someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =myNoun + " " +myAdjective+" "+ myVerb+" "+myAdverb; // Change this line
// Only change code above this line
const myArray = ["peanut butter" , 4];
// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];
const myArray = [50, 60, 70];
const myData=myArray[0];
// Setup
const myArray = [55, 64, 99];
myArray[0]=45;
// Only change code below this line
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  // Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
// Only change code below this line
// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray =myArray.pop();
// Only change code below this line
// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray =myArray.shift();
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul" ,35]);

const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

  function functionWithArgs(p1, p2) {
    var s=p1+p2;
    console.log(s);
  }
  functionWithArgs(7,9);
  function timesFive(num) {
    return num *5;
  }
  
  const answer = timesFive(5);

  // Declare the myGlobal variable below this line

let myGlobal =10;
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal =5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
    // Only change code below this line
  const myVar=5;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log(myVar);
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed =processArg(7);


function nextInLine(arr, item) {
    // Your code here
  
    var queue = arr.push(item);
  
    var removeItem = arr.shift();
  
    return removeItem;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));

  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  
   if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  }
    // Only change code above this line
  
  
  trueOrFalse(true);
  trueOrFalse(false);
  function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  function compareEquality(a, b) {
    if (a ===b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  function testGreaterOrEqual(val) {
    if (val>=20) {  
      return "20 or Over";
    }
  
    if (val>=10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  function testLessThan(val) {
    if (val<25) {  
      return "Under 25";
    }
  
    if (val<55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  function testLogicalAnd(val) {
    // Only change code below this line
  
    
      if (val>24 && val<51 ) {
        return "Yes";
      }
    
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
  
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else{return "Between 5 and 10";}
  
  }
  
  testElseIf(7);
  function orderMyLogic(val) {
    if (val < 10) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  function orderMyLogic(val) {
    if (val < 11 && val> 4)  {
      return "Less than 10";
    } else if (val <5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(4);