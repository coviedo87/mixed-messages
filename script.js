/* 
-------------------------------
Project: Mixed Messages
Author: Carlos Oviedo
version: 2
Date: 02/20/2025

Description: random message generator
------------------------------
*/

 const times = ["Time to", "Today", "This week", "Remember to"];
 const emojies = ["🤙🏼", "🙌", "🤝", "👌", "🤗", "💫", "☘️", "💡", "🗝️", "💚"];
 const mementos = [
    "try again",
    "pick a good one",
    "stick together",
    "pick up the pace",
    "make some noice"
 ]

//Generates random memento message
function randomMessage () {
    //store index for times arr
    let num1 = Math.floor(Math.random() * (times.length - 0) + 0);

    //store index for emojies arr
    let num2 = Math.floor(Math.random() * (emojies.length - 0) + 0);

    //store index for mementos arr
    let num3 = Math.floor(Math.random() * (mementos.length - 0) + 0);
    
    console.log(`${times[num1]} ${mementos[num3]}! ${emojies[num2]}`);
}


//call the function
randomMessage();

//next steps, use the index.html to display the message in the web browser bonus: style it

