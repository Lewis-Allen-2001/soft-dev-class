console.log("test");
/*code runs top to bottom*/

/*console is  place for devs to see the value of things they're trying to look at*/

/*if statements*/
const evilvillian = "bunk";
let PlayerName = "jeff";
PlayeNname = "dale";
let PlayerTwo = "jeff2";

const PlayerHasKey = true;
let DidDefeatTopbunk = false;

if (PlayerHasKey && DidDefeatTopbunk) {
  console.log("You venture forwards!!");
} else if (PlayerHasKey) {
  console.log("the door swings open , a gush of wing blows through your hair");
} else if (DidDefeatTopbunk) {
  console.log(
    "the door will not open therefore YOU SHALL NOT PASSSS!!!, a giant bunk bed approches!"
  );
} else {
  console.log("you dead mate gg");
}

if (PlayerTwo != "jeff2" && DidDefeatTopbunk) {
  console.log(`${PlayerTwo} dives of the top bunk`);
} else {
  console.log(`${PlayerTwo} joins the fight!`);
}

console.log(evilvillian);

console.log("this is after the if statement!");

/*anatomy of an if statement! 
if (playerhaskey){
    alert('You venture forwards!!')
} */

/* 

 = assigment operator
 == equality operator (is the value the same?)
 === strict equality operator (is the value and the data type the same?)
 !=  not equal to

 || - OR symbol (one of the things is true)
 && - AND (both things are true)

 `` - backticks
 `${variableName}` - template literals (dones't have to variblaes, any 'statement' will do (including maths, function calls, whatever))

 < - less than 
> - greater than

 <= - less than or equal to
 >= - greater than or equal to
*/
