//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements about these items,
//   such as “I would like to own a Honda motorcycle.”
var transportation = ["CG125 motorcycle", "toyota car", "honda civic car"];
transportation.forEach(function (transportation) {
    console.log("I would like to own a ".concat(transportation, "."));
});
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
var Guests = ["Babar Azam", "Imran Ali khan", "kamran khan tessori"];
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// // 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
var unableToAttend = "Babar Azam";
console.log("".concat(unableToAttend, "\ncan't make it to dinner."));
// Replace the guest
var newGuest = "Daniyal Nagori";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
// new invitations
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner?"));
});
