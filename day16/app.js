// *Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
//  and a method describe() that logs a sentence about the laptop.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// *Explain & TIP:* Objects can also contain functions (methods) that can perform actions using the object's properties. 
// This introduces method definition within objects.
var laptop = {
    make: "Hp",
    model: "probook 640",
    year: 2020,
    describe: function () {
        console.log("This laptop is a ".concat(this.make).concat(this.model).concat(this.year));
    }
};
laptop.describe();
// *Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year,
//  use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// *Explain & TIP:* Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures
var Laptops = [
    { make: "Hp", model: "probook 640", year: "2020" },
    { make: "Apple", model: "Macbook pro", year: 2020 },
    { make: "Hp", model: "Pavilion 15", year: 2019 }
];
var Laptop1 = Laptops[0], Laptop2 = Laptops[1], laptops3 = Laptops[2];
console.log(Laptop1);
console.log(Laptop2);
// *Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// *Explain & TIP:* The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
var priceSet1 = [20000, 25000, 30000];
var priceSet2 = [15000, 10000, 18000];
var combinePrices = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinePrices);
