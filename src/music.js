const playPauseButton = document.getElementById("playPause");
const playPauseIcon = document.getElementById("playPauseIcon");
const playPauseText = document.getElementById("playPauseText");

const playSrc = "./assets/play.png";
const pauseSrc = "./assets/pause.png";

const playText = "Play Music";
const pauseText = "Pause Music ";

function handleMusicButtonSync() {
  const musicElement = document.getElementById("music");

  if (musicElement.paused) {
    playPauseIcon.src = playSrc;
    playPauseText.innerHTML = playText;
  } else {
    playPauseIcon.src = pauseSrc;
    playPauseText.innerHTML = pauseText;
  }
}

playPauseButton.addEventListener("click", function () {
  const musicElement = document.getElementById("music");
  if (musicElement.paused) {
    musicElement.play();
  } else {
    musicElement.pause();
  }
  handleMusicButtonSync();
});

document.addEventListener("DOMContentLoaded", handleMusicButtonSync);
