// *Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, 
// like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// *Explain & TIP:* Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.

// showing a programmer's skills list in detail
 let developeskills = {
    language : ["javaScript","typeScript","HTML"],
    frameworks : ["React","Angular","vue"],
    tools: ["Git","Webpack","Docker"]
 };


 // Getting specific skills from the list
 let {
    language, frameworks,tools
 }= developeskills;
    
 //Showing a skill from each category
 console.log(`Language: ${language[0]}, framework: ${frameworks [0]}, tool: ${tools[0]}`);
 