//this is global scope
// we can use it where ever we want
let globalScope = "foo bar";
const stillGlobal = "bar foo";

function hello() {}

//take number add 2 to it
//and times by 90

function addTwoTimesNinety(number) {
  return (number + 2) * 90;
}

//turns number into string
// with some cool ascii art

function numberToAsciiArt(number) {
  return `⊂(◉‿◉)つ ${number} is very cool!`;
}

console.log(numberToAsciiArt(addTwoTimesNinety(40)));
