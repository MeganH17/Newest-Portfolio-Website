window.addEventListener("DOMContentLoaded", () => {
  const bgAudio = document.getElementById("bg-audio");
  const mainImage = document.getElementById("main-cat-image");
  const catfishButton = document.getElementById("calicocatfood-button");
  const cucumberButton = document.getElementById("cucumber-button");
  const yarnButton = document.getElementById("yarn-button");
  const introText = document.querySelector(".intro-text");

  // Audio elements
  const foodSound = document.getElementById("food-sound");
  const playSound = document.getElementById("play-sound");
  const patSound = document.getElementById("pat-sound");

  // Start background music on first click
  document.body.addEventListener("click", () => {
    bgAudio.play();
  }, { once: true });

  // Main image click for box pose
  mainImage.addEventListener("click", () => {
    mainImage.src = "Box.PNG";
    setTimeout(() => {
      mainImage.src = "Box.PNG";
    }, 1000);
  });

  // Catfish Button (food) functionality
  catfishButton.addEventListener("click", () => {
    foodSound.currentTime = 0;
    foodSound.play();

    mainImage.src = "calicoeat1.PNG";
    setTimeout(() => {
      mainImage.src = "calicoeat2.PNG";
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

  // Cucumber Button (pat) functionality
  cucumberButton.addEventListener("click", () => {
    patSound.currentTime = 0;
    patSound.play();

    mainImage.src = "cucumber1.PNG";
    setTimeout(() => {
      mainImage.src = "cucumber2.PNG";
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

  // Yarn Button (play) functionality
  yarnButton.addEventListener("click", () => {
    playSound.currentTime = 0;
    playSound.play();

    mainImage.src = "calicoplay1.PNG";
    setTimeout(() => {
      mainImage.src = "calicoplay2.PNG";
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
