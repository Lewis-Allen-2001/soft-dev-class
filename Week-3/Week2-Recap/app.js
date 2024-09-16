const pets = [
  {
    name: "Buddy",
    type: "Dog",
    age: 3,
  },
  {
    name: "Whiskers",
    type: "Cat",
    age: 2,
  },
  {
    name: "Nibbles",
    type: "Hamster",
    age: 1,
  },
];

//to select a single item E.G: console.log(pets[2].type)

for (let i = 0; i < pets.length; i++) {
  console.log(
    ` ${pets[i].name} is a ${pets[i].type} who is  ${pets[i].age} years old!`
  );
}

//*for loop: This method uses an index to iterate over each element of the array.
