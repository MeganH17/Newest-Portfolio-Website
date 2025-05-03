window.addEventListener("DOMContentLoaded", () => {
    const bgAudio = document.getElementById("bg-audio");
    const soundButton = document.getElementById("soundoff-button"); 
  
    document.body.addEventListener("click", () => {
        bgAudio.play();
      }, { once: true });

    // Get all cat buttons
    const leftCat = document.querySelector(".left-cat");
    const middleCat = document.querySelector(".middle-cat");
    const rightCat = document.querySelector(".right-cat");
  
    // Get audio elements
    const hoverSound1 = document.getElementById("hover-sound-1");
    const hoverSound2 = document.getElementById("hover-sound-2");
    const hoverSound3 = document.getElementById("hover-sound-3");
  
    // Start background music on first click (browser autoplay rules)
    document.body.addEventListener("click", () => {
      bgAudio.play();
    }, { once: true });

  // sound button
  soundButton.addEventListener("click", () => {
    soundButton.src = "soundon.png";
  });

    // Setup hover sound for a button
    function setupHoverSound(button, sound, imageIn, imageOut) {
      if (button && sound) {
        button.addEventListener("mouseenter", () => {
          sound.currentTime = 0;
          sound.play();
          if (imageIn) button.src = imageIn;
        });
  
        button.addEventListener("mouseleave", () => {
          if (imageOut) button.src = imageOut;
          sound.pause();  // Pause the sound when mouse leaves
          sound.currentTime = 0; // Optional: Reset the audio to start
        });
      } else {
        console.warn("Missing button or sound for hover setup.");
      }
    }
  
    // Set up hover sound and optional image changes for each cat button
    setupHoverSound(leftCat, hoverSound1, null, null);      // Add images if needed
    setupHoverSound(middleCat, hoverSound2, null, null);    // e.g. "MiddleCatClose.png", "MiddleCatOpen.png"
    setupHoverSound(rightCat, hoverSound3, null, null);
  });
  
