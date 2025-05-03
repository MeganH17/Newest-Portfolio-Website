window.addEventListener("DOMContentLoaded", () => {
    const bgAudio = document.getElementById("bg-audio");
    const mainImage = document.getElementById("main-cat-image");
    const foodButton = document.getElementById("food-button");
    const playButton = document.getElementById("play-button"); 
    const introText = document.querySelector(".intro-text");
    const patButton = document.getElementById("pat-button"); 
  
    // Start background music on first click
    document.body.addEventListener("click", () => {
      bgAudio.play();
    }, { once: true });
  
    // Rotate image to face the cursor
    document.addEventListener("mousemove", (e) => {
      const rect = mainImage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
  
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
  
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      mainImage.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;
    });
  
    // Food Button functionality
    foodButton.addEventListener("click", () => {
      mainImage.src = "eat1.png";
  
      setTimeout(() => {
        mainImage.src = "eat2.png";
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
  
    // Play Button functionality
    playButton.addEventListener("click", () => {
      mainImage.src = "play1.png";
  
      setTimeout(() => {
        mainImage.src = "play2.png";
      }, 1000);
  
      setTimeout(() => {
        mainImage.src = "play3.png";
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



    // Food Button functionality
   patButton.addEventListener("click", () => {
        mainImage.src = "pat1.png";
    
        setTimeout(() => {
          mainImage.src = "pat2.png";
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
  