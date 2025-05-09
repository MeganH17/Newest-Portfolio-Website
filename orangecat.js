window.addEventListener("DOMContentLoaded", () => {
  const bgAudio = document.getElementById("bg-audio");
  const mainImage = document.getElementById("main-cat-image");
  const catfoodButton = document.getElementById("catfood-button");
  const pianoButton = document.getElementById("piano-button");
  const lemonButton = document.getElementById("lemon-button");
  const introText = document.querySelector(".intro-text");

  // Audio elements
  const foodSound = document.getElementById("food-sound");
  const playSound = document.getElementById("play-sound");
  const patSound = document.getElementById("pat-sound");

  // Start background music on first click
  document.body.addEventListener("click", () => {
    bgAudio.play();
  }, { once: true });

  // Click main image for a quick pose
  mainImage.addEventListener("click", () => {
    mainImage.src = "pose2.png";
    setTimeout(() => {
      mainImage.src = "pose1.png";
    }, 1000);
  });

  // Cat food Button functionality
  catfoodButton.addEventListener("click", () => {
    foodSound.currentTime = 0;
    foodSound.play();

    mainImage.src = "orangeeat1.png";
    setTimeout(() => {
      mainImage.src = "orangeeat2.png";
    }, 1000);

    fetch("https://meowfacts.herokuapp.com/?count=100")
      .then(response => response.json())
      .then(data => {
        const facts = data.data;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        introText.textContent = randomFact;
      })
      .catch(error => {
        console.error("Error fetching cat fact:", error);
        introText.textContent = "Could not load a cat fact at this time.";
      });
  });

  // Piano Button functionality
  pianoButton.addEventListener("click", () => {
    playSound.currentTime = 0;
    playSound.play();

    mainImage.src = "sing1.png";
    setTimeout(() => {
      mainImage.src = "sing2.png";
    }, 1000);
    setTimeout(() => {
      mainImage.src = "sing3.png";
    }, 2000);

    fetch("https://meowfacts.herokuapp.com/?count=100")
      .then(response => response.json())
      .then(data => {
        const facts = data.data;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        introText.textContent = randomFact;
      })
      .catch(error => {
        console.error("Error fetching cat fact:", error);
        introText.textContent = "Could not load a cat fact at this time.";
      });
  });

  // Lemon Button functionality
  lemonButton.addEventListener("click", () => {
    patSound.currentTime = 0;
    patSound.play();

    mainImage.src = "lemon1.png";
    setTimeout(() => {
      mainImage.src = "lemon2.png";
    }, 1000);

    fetch("https://meowfacts.herokuapp.com/?count=100")
      .then(response => response.json())
      .then(data => {
        const facts = data.data;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        introText.textContent = randomFact;
      })
      .catch(error => {
        console.error("Error fetching cat fact:", error);
        introText.textContent = "Could not load a cat fact at this time.";
      });
  });
});
