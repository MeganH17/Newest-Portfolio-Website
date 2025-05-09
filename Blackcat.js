window.addEventListener("DOMContentLoaded", () => {
  const bgAudio = document.getElementById("bg-audio");
  const mainImage = document.getElementById("main-cat-image");
  const foodButton = document.getElementById("food-button");
  const playButton = document.getElementById("play-button");
  const patButton = document.getElementById("pat-button");
  const introText = document.querySelector(".intro-text");

  // New audio elements
  const foodSound = document.getElementById("food-sound");
  const playSound = document.getElementById("play-sound");
  const patSound = document.getElementById("pat-sound");

  // Start background music on first click (optional)
  document.body.addEventListener("click", () => {
    bgAudio.play();
  }, { once: true });

  // Rotate image
  document.addEventListener("mousemove", (e) => {
    const rect = mainImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    mainImage.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;
  });

  // Food Button
  foodButton.addEventListener("click", () => {
    mainImage.src = "eat1.png";
    foodSound.currentTime = 0;
    foodSound.play();

    setTimeout(() => {
      mainImage.src = "eat2.png";
    }, 1000);

    fetchCatFact();
  });

  // Play Button
  playButton.addEventListener("click", () => {
    mainImage.src = "play1.png";
    playSound.currentTime = 0;
    playSound.play();

    setTimeout(() => {
      mainImage.src = "play2.png";
    }, 1000);

    setTimeout(() => {
      mainImage.src = "play3.png";
    }, 2000);

    fetchCatFact();
  });

  // Pat Button
  patButton.addEventListener("click", () => {
    mainImage.src = "pat1.png";
    patSound.currentTime = 0;
    patSound.play();

    setTimeout(() => {
      mainImage.src = "pat2.png";
    }, 1000);

    fetchCatFact();
  });

  function fetchCatFact() {
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
  }
});
