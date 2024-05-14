//38.Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//  Call your function for three different cities, at least one of which is not in the default country
function describe_city(city, country) {
    if (country === void 0) { country = "Pakintan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Badin");
describe_city("Golarchi");
describe_city("Makkah", "Saudi Arabia");
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Makkah", "Saudi Arabia"));
console.log(city_country("Newyork", "America"));
