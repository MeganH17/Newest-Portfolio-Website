const URL = "https://teachablemachine.withgoogle.com/models/d1CCvfaZE/"; // Your Teachable Machine model URL
let model, maxPredictions;

const videoElement = document.getElementById("webcam");

async function init() {
    // Load the Teachable Machine model
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
        await videoElement.play();
    } catch (err) {
        console.error("Error accessing webcam:", err);
        alert("Could not access the camera. Please allow camera access.");
        return;
    }

    // Start prediction loop
    window.requestAnimationFrame(loop);
}

async function loop() {
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(videoElement);
    let highest = prediction[0];

    for (let i = 1; i < prediction.length; i++) {
        if (prediction[i].probability > highest.probability) highest = prediction[i];
    }

    // Debug: log the prediction
    console.log("Detected class:", highest.className, "Probability:", highest.probability.toFixed(2));

    const petImage = document.getElementById("pet");
    const className = highest.className.trim().toLowerCase();

    // Change pet image based on detected expression
    if (className === "big smile") {
        petImage.src = "2.png";
    } else if (className === "frown") {
        petImage.src = "3.png";
    } else if (className === "mouth slightly open") {
        petImage.src = "4.png";
    } else {
        petImage.src = "1.png";
    }
}

// Start everything
init();
