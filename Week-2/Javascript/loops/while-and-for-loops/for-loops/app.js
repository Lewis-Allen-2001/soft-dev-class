for (let counter = 0; counter < 5; counter++) {
  console.log(`${counter}`);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

const foods = ["sushi", "tacos", "burritos", "cheese", "omlette", "toasties"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

const animals = ["dog", "cat", "otters", "raccon", "axolotls", "turtles"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

const colours = ["red", "black", "emerald green", "purple", "pink"];
for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

const petnames = ["Jiji", "Penny", "Rico", "Frisbee"];
petnames.forEach(function (petnames, index) {
  console.log(index, petnames);
});

const Shows = [
  "BreakingBad",
  "BetterCallSaul",
  "SmilingFriends",
  "TheInbetweeners",
];
Shows.forEach(function (Shows) {
  console.log(Shows);
});

const movies = ["Elcamino", "Saw", "Saw2", "Matilda", "Shrek", "StarWars"];

for (let singlemovie of movies) {
  console.log(singlemovie);
}

movies.forEach(function (movieName, yeee) {
  console.log(
    `this is being logged forEach: ${movies} is the best movie of all time!`
  );
});
