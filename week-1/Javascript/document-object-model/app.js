console.log("Hello world!");

const body = document.querySelector("body");

console.log(body);

const h1 = document.querySelector("h1");

console.log(h1);

h1.textContent = "wow io was written in JS!!";

const image = document.querySelector("img");
image.src =
  "https://us-tuna-sounds-images.voicemod.net/c661b01a-8afe-4298-95d0-d34c6765a5ff-1657838151554.jpg";

const h2 = document.createElement("h2");
h2.textContent = "EY UP!";
body.appendChild(h2);
