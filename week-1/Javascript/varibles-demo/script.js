console.log("EY UP!!");

let myname = "Lewis";

const mylocation = "Hull";

console.log(myname);
console.log(mylocation);

//this is concatanate;
console.log(myname + " " + mylocation + "!");

let age = 23;
console.log(age);

console.log(myname + " " + mylocation + " " + age + "!");

let myAmazingnumber = 23;

//clicker!!
const buttonA = document.querySelector("button_A");
const headingA = document.querySelector("heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
