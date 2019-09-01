// this style file just makes it look nice
import "./styles.css";

/* The goal is to refactor this code! Based on the sentence we want to
randomize the order of the words on each line, separating them
with a <br>. The comments explain what the code is doing,
not what you need to do.

Whatever you would like to refactor is up to you, 
we're looking for:
- Clarity: splitting up your code in a readable and reusable way
- Context: can you explain to us what changes you have made and why?
*/

/*
the original code had a lot of unnecessary functions and extra variables.
Round(), for example, is unneccessary with the Math.floor() function
console.log() removes the need for adding <br> and the last printing function
The items array was unneccessary, as the split() function creates the array we need
even within the for loop, simplifying it to i++ 
The first for loop was unnecessary as the Math.Random() function produces the random index number for us
The final for loop is very repetitive, the split has already been done, the rounding is unnecessry, mapping and joining is unneccessry 

To make it resuable, I created a function that incorporated the splitting, randomizing, and printing functions, that would take whatever string you give it
*/
var i;

function randomizeSentence(sentence) {
  // splits the inputted sentence into an array of strings, separated by word
  var words = sentence.split(" ");
  for (i = 0; i <= 10; i++) {
    // produces a random item number no larger than the array created by splitting the sentence above
    var item = Math.floor(Math.random() * words.length);
    // gets the word associated with the random item number
    var word = words[item];
    // prints the word with a <br> following
    console.log(word);
  }
}
// this function allows us to input whatever sentence we like, such as the following:
randomizeSentence("I live in Toronto");
