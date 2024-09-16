console.log("hello!");

const space = document.getElementById("space");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

playBtn.addEventListener("click", function (ya) {
  console.log(ya);
});

pauseBtn.addEventListener("click", function () {
  space.pause();
});

stopBtn.addEventListener("click", function () {
  space.pause();

  space.currentTime = 0;
});

skipBack.addEventListener("click", function () {
  space.currentTime -= 10;
});

skipFor.addEventListener("click", function () {
  space.currentTime += 10;
});
