/* 
-------------------------------
Project: Mixed Messages
Author: Carlos Oviedo
version: 1
Date: 02/19/2025

Description: random message generator
------------------------------
*/


//grab quotes from https://www.themost10.com/top-ten-quotes-of-all-time/#
//array with inspirational quotes
const quotesArr = [
    ["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"],
    ["I have a dream.", "Martin Luther King Jr."],
    ["In the end, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."],
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
    ["Life is what happens when you’re busy making other plans.", "John Lennon"],
    ["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],

];

//generates random number and use as an index to log a quote from the quotes array
function generateQuote () {
    let randomNum = Math.floor(Math.random() * (9 - 0) + 0);
    console.log(`Inspirational quote of the day:

        "${quotesArr[randomNum][0]}" 
            - ${quotesArr[randomNum][1]}`);
}

//calls the function
generateQuote();