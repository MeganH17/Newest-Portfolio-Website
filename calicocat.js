window.addEventListener("DOMContentLoaded", () => {
    const bgAudio = document.getElementById("bg-audio");
    const mainImage = document.getElementById("main-cat-image");
    const catfishButton = document.getElementById("calicocatfood-button");
    const cucumberButton = document.getElementById("cucumber-button"); 
    const introText = document.querySelector(".intro-text");
    const yarnButton = document.getElementById("yarn-button"); 
    // const otherImages = document.getElementById(".otherImage");

    // Start background music on first click
    document.body.addEventListener("click", () => {
      bgAudio.play();
    }, { once: true });
  

    mainImage.addEventListener("click", () => {
        mainImage.src = "Box.PNG";

        console.log(2);
      
        setTimeout(() => {
          mainImage.src = "Box.PNG";
        }, 1000);
      });

  
    //cat fish food  functionality
    catfishButton.addEventListener("click", () => {
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
  
    // cucumber Button functionality
    cucumberButton.addEventListener("click", () => {
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



    // lemon Button functionality
   yarnButton.addEventListener("click", () => {
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
  