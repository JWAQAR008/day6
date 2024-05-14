// *Question 59:* Add a Special Number: Make a program that creates custom adders. 
//  These adders can add a specific number to any other number you give them later.

//  *Explain & TIP:* Imagine you have a magic box that can add a specific number to any number you put in it. 
// This program makes that magic box for you!

function makeadder (valuetoAdd:number):(number) => number {
    return function (number: number):number{
        return number + valuetoAdd

    };
}
let adders = makeadder(5);
console.log(adders(10));
