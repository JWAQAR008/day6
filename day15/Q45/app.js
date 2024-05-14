// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    Options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log((make_car("Honda", "Civic", ["color", "black"], ["year", 2022])));
console.log((make_car("ford", "fiesta", ["color", "white"], ["sunroof", true])));
