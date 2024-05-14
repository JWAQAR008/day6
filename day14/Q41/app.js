//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magicians = ["Awais", "Rehan", "Baber"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
