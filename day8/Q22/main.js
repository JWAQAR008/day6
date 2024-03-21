// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var class_fellows = ["Awais", "Afzal", "Sikander"]; //International Errors: arry are zero-indexed, so index 3 is out of bounds.
console.log(class_fellows[3]);
class_fellows[2] = "Sikander"; // Correcting the error by accessing a valid index.
