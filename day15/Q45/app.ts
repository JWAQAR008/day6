// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

 function make_car(manufacturer: string, model: string, ...Options: [string, any][]): object{
    let car = {
        manufacturer , model };
        Options.forEach(([key,value]) =>car [key] = value);
            return car;
    }
    console.log((make_car("Honda","Civic", ["color","black"],["year",2022])));
    console.log((make_car("ford","fiesta",["color","white"],["sunroof", true])));
    
    