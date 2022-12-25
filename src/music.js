const playPauseButton = document.getElementById("playPause");
const playPauseIcon = document.getElementById("playPauseIcon");
const playPauseText = document.getElementById("playPauseText");
const musicElement = document.getElementById("music");

const playSrc = "./assets/play.png";
const pauseSrc = "./assets/pause.png";

const playText = "Play Music";
const pauseText = "Pause Music ";

musicElement.addEventListener("play", function () {
  playPauseIcon.src = pauseSrc;
  playPauseText.innerHTML = pauseText;
});

musicElement.addEventListener("pause", function () {
  playPauseIcon.src = playSrc;
  playPauseText.innerHTML = playText;
});

playPauseButton.addEventListener("click", function () {
  if (musicElement.paused) {
    musicElement.play();
  } else {
    musicElement.pause();
  }
});
