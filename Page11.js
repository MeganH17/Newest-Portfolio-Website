// Select left and right images
const leftImage = document.querySelector('.left');
const rightImage = document.querySelector('.right');

// Function to animate floating up and down
function floatImage(image, direction) {
  let position = 0; // Start position
  const amplitude = 60; // Distance the image will float up and down (in pixels)
  const speed = 0.5; // Speed of the floating animation (higher value for faster movement)

  // Toggle the direction of the movement (up or down)
  function move() {
    if (direction === 'up') {
      position -= speed;
      if (position <= -amplitude) {
        direction = 'down';
      }
    } else {
      position += speed;
      if (position >= amplitude) {
        direction = 'up';
      }
    }

    image.style.top = `${position}px`; // Apply the position to the image
    requestAnimationFrame(move); // Continue the animation
  }

  move(); // Start the floating movement
}

// Start the floating effect for both images
floatImage(leftImage, 'down');
floatImage(rightImage, 'up');


window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("center-button");

  if (!button) {
    console.log("Button not found!");
    return;
  } else {
    console.log("Button found!");
  }

  // Change image on hover
  button.addEventListener("mouseenter", () => {
    console.log("Hovered!");
    button.src = "pressedbutton.png"; // Your hover image
  });

  button.addEventListener("mouseleave", () => {
    console.log("Unhovered!");
    button.src = "Buttonplay.png"; // Back to default
  });
});
