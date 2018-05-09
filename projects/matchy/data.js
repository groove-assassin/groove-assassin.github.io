/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {
    species: 'lizario',
    name: 'stormgroth',
    noises: []
};

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = ("GGRRR");
noises[1] = ("scrunt");
noises.unshift("blongo");
noises.push("flong");

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
noises.push("hyunk");

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * through dot and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
    friends: []
};
             
animals.push(duck);
console.log(animals);

var Lucio = { 
    species: "human",
    name:"Lúcio Correia dos Santos",
    noises:["IT's Luciooo!", "Let's break it DOWN!", "WOOOO!"]
};
animals.push(Lucio);

var Junkrat = {
    species: "human",
    name: "Jamison Fawkes",
    noises: ["Fire in the Hole!!!", "BRRRIIINNNGGG!"]
};
animals.push(Junkrat);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; //i chose an array because there is no further information being stored here beyond names

function getRandom(arr) {
    return Math.floor(Math.random() * arr.length);
}

friends.push(animals[getRandom(animals)].name);
console.log(friends);
console.log();
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
