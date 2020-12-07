let isLoop = false;
const audio = document.querySelector("audio");
const playPauseBtn = document.querySelector(".play-pause");

playPauseBtn.addEventListener("click", () => {
   if (playPauseBtn.textContent === "Play") {
      audio.play();
      playPauseBtn.textContent = "Pause";
   } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
   }
});

audio.addEventListener("ended", function () {
   if (isLoop === true) return this.play();

   if (audio.src === "http://127.0.0.1:5500/data/1.mp3") {
      audio.src = "./data/2.mp3";
      this.play();
   } else {
      audio.src = "./data/1.mp3";
      this.play();
   }
});

document.querySelector(".prev").addEventListener("click", () => {
   if (audio.src === "http://127.0.0.1:5500/data/2.mp3") {
      audio.src = "./data/1.mp3";

      if (playPauseBtn.textContent === "Pause") {
         playPauseBtn.textContent = "Pause";
         audio.play();
      } else {
         playPauseBtn.textContent = "Play";
      }
   } else {
      audio.src = "./data/2.mp3";

      if (playPauseBtn.textContent === "Pause") {
         audio.play();
         playPauseBtn.textContent = "Pause";
      } else {
         playPauseBtn.textContent = "Play";
      }
   }
});

document.querySelector(".next").addEventListener("click", () => {
   if (audio.src === "http://127.0.0.1:5500/data/1.mp3") {
      audio.src = "./data/2.mp3";

      if (playPauseBtn.textContent === "Pause") {
         audio.play();
         playPauseBtn.textContent = "Pause";
      } else {
         playPauseBtn.textContent = "Play";
      }
   } else {
      audio.src = "./data/1.mp3";

      if (playPauseBtn.textContent === "Pause") {
         audio.play();
         playPauseBtn.textContent = "Pause";
      } else {
         playPauseBtn.textContent = "Play";
      }
   }
});

document.querySelector("input[type=checkbox]").addEventListener("input", () => {
   isLoop = !isLoop;
});

window.addEventListener("keydown", (event) => {
   if (event.key === " " && playPauseBtn.textContent === "Play") {
      audio.play();
      playPauseBtn.textContent = "Pause";
   } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
   }
});
