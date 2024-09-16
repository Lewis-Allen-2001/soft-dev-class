let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

let randomNumber = Math.floor(Math.random() * 10) + 1; // i rolled a dice so always random
let userAns = prompt("Guess a number between 1 - 10");

while (randomNumber != userAns) {
  alert("guess again!");
  userAns = prompt("Guess a number between 1 - 10");
}

alert("You got everything right!!");

alert("i'll get you next time!!!!");

console.log("this is the end of the loop!");
