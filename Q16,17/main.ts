


// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guests: string [] = ["Zaffar Abbas", "Iqrar ul Hassan", "Waseem Badami"];
console.log("Great news ! I found a bigger dinner table!.");

//Adding more guests
guests.unshift("Abdul Sattar Edhi");
guests.splice(guests.length / 2, 0, "Asif Zardari");
guests.push("Nawaz Sharif");

guests.forEach((guest) =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
    });

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


console.log( "Unfortunatly, I can only invite two people for dinner");

while (guests.length> 2){
    let removeGuest = guests.pop();
    console.log(`Sorry ,${removeGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invite to dinner.`);
    
});

guests.splice(0, guests.length);
console.log(guests); // this show empty list