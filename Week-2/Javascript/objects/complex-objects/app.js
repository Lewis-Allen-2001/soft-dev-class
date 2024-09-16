const person = {
  name: "Lewis",
  age: "23",
  born: "Sheffield",
  sayHello: function (name) {
    console.log("Hello!" + name + "!");
  },
};
person.sayHello("Lewis");

const person2 = {
  name: "Keith",
  age: "37",
  born: "York",
  getAge: function () {
    return person2.age;
  },
};

const age = person2.age;
console.log(age);

const car = {
  Make: "Toyota",
  Model: "Supra mk3",
  yearofMake: "1997",
  topSpeed: "150MPH",
  colours: ["black", "red", "white", "silver", "yellow"],
};

console.table(car);
