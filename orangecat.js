window.addEventListener("DOMContentLoaded", () => {
    const bgAudio = document.getElementById("bg-audio");
    const mainImage = document.getElementById("main-cat-image");
    const catfoodButton = document.getElementById("catfood-button");
    const pianoButton = document.getElementById("piano-button"); 
    const introText = document.querySelector(".intro-text");
    const lemonButton = document.getElementById("lemon-button"); 
    // const otherImages = document.getElementById(".otherImage");

    // Start background music on first click
    document.body.addEventListener("click", () => {
      bgAudio.play();
    }, { once: true });
  

    mainImage.addEventListener("click", () => {
        mainImage.src = "pose2.png";

        console.log(2);
      
        setTimeout(() => {
          mainImage.src = "pose1.png";
        }, 1000);
      });

  
    // cat food Button functionality
    catfoodButton.addEventListener("click", () => {
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
  
    // piano Button functionality
    pianoButton.addEventListener("click", () => {
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



    // lemon Button functionality
   lemonButton.addEventListener("click", () => {
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
  