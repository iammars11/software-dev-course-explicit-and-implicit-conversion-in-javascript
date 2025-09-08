/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Example 1: Subtracting a number from a string
// "5" is a string, but the minus operator converts it to a number automactically
let result = ("5") - 2;
console.log("The result is: " + result);

// Example 2: Boolean Conversion
// Any non-empty string converts to true in JavaScript. therefore Boolean("false") is true
// If you want it to reflect the actual "false" value, compare string explicitly
let isValid = ("false" === "true") // This will be false
if (isValid) {
  console.log("This is valid!") // Won't run now 
} else {
  console.log("This is NOT vaild!"); // Corrected Logic
}

// Example 3: Adding a number to a string
// Using + with a stinjg causes concatenation (implicit conversion). To add numerically, convert string to number
let age = "25"
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Implicit Conversion
let x = "10";
let y = 5;
let sum = x * y; // JS automatically converts "10" to number
console.log("Implicit conversion: '10' * 5 = " + sum); // 50

// Explicit Conversion
let str = "100";
let num = Number(str); // explicitly converts string to number
console.log("Explicit conversion: '100' -> Number = " + num); // 100

// Edge case example: undefined
let value;
console.log("Explicit conversion of undefined: " + Number(value)); // NaN

