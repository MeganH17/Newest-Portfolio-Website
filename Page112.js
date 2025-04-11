// Scores for categories
let scores = {
    protagonist: 0,
    sidekick: 0,
    villain: 0
  };
  
  // Answers funtion
  function handleAnswer(choice) {
   
    if (choice === "protagonist") {
      scores.protagonist += 1;
    } else if (choice === "sidekick") {
      scores.sidekick += 1;
    } else if (choice === "villain") {
      scores.villain += 1;
    }
  
    
    displayResult();
  }
  
  
  function displayResult() {
    const result = document.getElementById("role");
  
    // Highest score
    let highestScore = Math.max(scores.protagonist, scores.sidekick, scores.villain);
    
    let role = "";
    if (highestScore === scores.protagonist) {
      role = "Protagonist";
    } else if (highestScore === scores.sidekick) {
      role = "Sidekick";
    } else if (highestScore === scores.villain) {
      role = "Villain";
    }
  
    // LocalStorage
    localStorage.setItem('userRole', role);
  }
  

  const buttons = document.querySelectorAll('.answer');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {

      //  clicked class to change color
      button.classList.add('clicked');
  
      // Disable all buttons
      const questionContainer = button.closest('.question'); // Find the closest .question container
      const allButtonsInQuestion = questionContainer.querySelectorAll('.answer');
      allButtonsInQuestion.forEach(btn => {
        btn.disabled = true;  // Disable each button within this question
      });
  
      handleAnswer(button.dataset.choice);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const result = localStorage.getItem('userRole');
    const resultDescription = getResultDescription(result);
    const resultDetails = getResultDetails(result);
  
    document.getElementById('role').innerText = result;
    document.getElementById('result-description').innerText = resultDescription;
    document.getElementById('result-details').innerHTML = resultDetails;
  
    // Character images depending on result
    const image = document.getElementById('character-img');
    if (result === 'Protagonist') {
      image.src = 'Hero.png'; 
    } else if (result === 'Sidekick') {
      image.src = 'Sidekick.png'; 
    } else if (result === 'Villain') {
      image.src = 'Villain.png'; 
    } else {
      image.src = 'default.png'; // fallback image
    }
  });
  