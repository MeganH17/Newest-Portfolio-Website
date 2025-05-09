window.addEventListener("DOMContentLoaded", () => { 
  const bgAudio = document.getElementById("bg-audio");
  const soundButton = document.getElementById("soundoff-button"); 

  // Play background music only when sound button is clicked
  soundButton.addEventListener("click", () => {
    bgAudio.play();
  }, { once: true });

  // Change icon on click
  soundButton.addEventListener("click", () => {
    soundButton.src = "soundon.png";
  });

  const leftCat = document.querySelector(".left-cat");
  const middleCat = document.querySelector(".middle-cat");
  const rightCat = document.querySelector(".right-cat");

  const hoverSound1 = document.getElementById("hover-sound-1");
  const hoverSound2 = document.getElementById("hover-sound-2");
  const hoverSound3 = document.getElementById("hover-sound-3");

  function setupHoverSound(button, sound, imageIn, imageOut) {
    if (button && sound) {
      button.addEventListener("mouseenter", () => {
        sound.currentTime = 0;
        sound.play();
        if (imageIn) button.src = imageIn;
      });

      button.addEventListener("mouseleave", () => {
        if (imageOut) button.src = imageOut;
        sound.pause();
        sound.currentTime = 0;
      });
    } else {
      console.warn("Missing button or sound for hover setup.");
    }
  }

  setupHoverSound(leftCat, hoverSound1, null, null);
  setupHoverSound(middleCat, hoverSound2, null, null);
  setupHoverSound(rightCat, hoverSound3, null, null);
});
