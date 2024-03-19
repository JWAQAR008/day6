//4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\u201D");
//5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
var famous_person = 'Walt Disney';
var quote = ' if you can dream it, you can do it';
console.log("".concat(famous_person, " Once Said, \"").concat(quote, "\""));
//6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginni"\t" and "\n", at least once.
//  Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var Name = "\t\n waqar \t\n";
console.log(Name);
console.log(Name.trim());
