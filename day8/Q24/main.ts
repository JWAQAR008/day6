
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Equality with string
console.log("Testing equality with strings:");
console.log("apple"=="apple");//true
console.log("Apple"=="Apple");//false

// Using the lower case function
console.log("Testing with lower case");
console.log("Mango".toLowerCase()=="mango");
 
//Numerical tests 
console.log("Numerical tests:");
console.log(9>7);// true
console.log(10<9);// false
console.log(10>=5);
console.log(20<=10);
 
 //Tests using "and" and "or operators" 
console.log("Tests with 'and' and 'or':");
console.log(true && false);
console.log(true || false);

// Test whether an item is in a array
let fruits = ["grapes","watermelon","mango","banana"];
console.log("Is 'grapes' in fruits? ");
console.log(fruits.includes("grapes"));

// Test whether an item is not in a array
console.log("Is 'cherry' not in fruits?");
console.log(!fruits.includes("cherry"));
