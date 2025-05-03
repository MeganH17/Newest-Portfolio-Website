window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("center-button");
    const bgAudio = document.getElementById("bg-audio");
    const hoverSound = document.getElementById("hover-sound");
    const soundButton = document.getElementById("soundoff-button"); 
   
    // Start background music on first click (browser autoplay rules)
    document.body.addEventListener("click", () => {
      bgAudio.play();
    }, { once: true });
  
    // If button is found
    if (button && hoverSound) {
      console.log("Button found!");
  
      // Image swap on hover
      button.addEventListener("mouseenter", () => {
        console.log("Hovered!");
        button.src = "Cat close.png";
  
        // Play hover sound
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
  
      button.addEventListener("mouseleave", () => {
        console.log("Unhovered!");
        button.src = "Cat open.png";
      });
  
      // Optional click feedback
      button.addEventListener("click", () => {
        console.log("Image button clicked!");
      });
  
    } else {
      console.warn("Button or hover sound not found!");
    }
  
    // sound button
      soundButton.addEventListener("click", () => {
        soundButton.src = "soundon.png";
      });
    
  });
  
//   mainImage.addEventListener("click", () => {
//     mainImage.src = "pose2.png";

//     console.log(2);
  
//     setTimeout(() => {
//       mainImage.src = "pose1.png";
//     }, 1000);
//   });