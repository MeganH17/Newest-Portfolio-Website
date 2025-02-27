let Danger;
let fontSize = 70;
let betweenArray;
let r = 0;
let angle = 0;
let between2Array;
let between3Array;
let between4Array;
let twoArray;
let two2Array;
let two3Array; 
let worldsArray;
let worlds2Array;
let world3Array;

function preload() {
  Danger = loadFont("TYPOGRAFY_2025_02_14_18_47_10/Danger.otf");
}

function setup() {
 
 let canvas=createCanvas(900, 900);
  
  textFont(Danger);
  textSize(fontSize);
  canvas.parent('sketch-container');

  // TOP BETWEEN
  betweenArray = Danger.textToPoints("B e t w e e n", 40, 80, fontSize, {
    sampleFactor: 0.1,
  });

  // MIDDLE BETWEEN
  between2Array = Danger.textToPoints("B e t w e e n", 40, 180, fontSize, {
    sampleFactor: 0.1,
  });

  // BOTTOM BETWEEN
  between3Array = Danger.textToPoints("n e e w t e B", 40, 280, fontSize, {
    sampleFactor: 0.1,
  });
  between4Array = Danger.textToPoints("B e t w e e n", 40, 280, fontSize, {
    sampleFactor: 0.1,
  });

  // TOP TWO
  twoArray = Danger.textToPoints("T  w o", 500, 110, 120, {
    sampleFactor: 0.8,
  });
  angleMode(DEGREES);
  
  //MIDDLE TWO
  two2Array = Danger.textToPoints("T  w o", 500, 260, 120, {
    sampleFactor: 0.1,
  });
  
    //BOTTOM TWO
  two3Array = Danger.textToPoints("T  w o", 500, 430, 120, {
    sampleFactor: 0.8,
  });
  
  //TOP WORLD
  world3Array = Danger.textToPoints("Worlds", 40, 400, 120, {
  sampleFactor: 1,
});
  
  
   //MIDDLE WORLD
  worlds2Array = Danger.textToPoints("Worlds", 40,800, 120, {
    sampleFactor: 0.6,
  });
  
   //BOTTOM WORLD
  worldsArray = Danger.textToPoints("W o r l d s", 40,600, 120, {
    sampleFactor: 0.1,
  });
}

function draw() {
  background(255, 191, 0);
  let x = r*cos(angle);
  let y = r*sin(angle);

  text("W o r l d s",40,600)
  textSize (120)
  fill("blue")

  // TOP BETWEEN ANIMATION
  for (let i = 0; i < betweenArray.length; i++) {
    push();
    translate(betweenArray[i].x, betweenArray[i].y);
    rotate(r);
    r++;
    strokeWeight(3);
    line(-1, -1, 2, 5);
    pop();
  }

  // MIDDLE BETWEEN SHAPE
  push();
  beginShape();
  for (let i = 0; i < between2Array.length; i++) {
    vertex(between2Array[i].x, between2Array[i].y);
  }
  endShape();
  pop();

  // BOTTOM BETWEEN MOVEMENT
  push();
  //beginShape();
  for (let i = 0; i < between3Array.length; i++) {
    //vertex(between3Array[i].x, between3Array[i].y);

    push();
    translate(between3Array[i].x, between3Array[i].y);
    line(-2, -2, 1, 1);
    pop();

    // Ensure within bounds before accessing between4Array[i]
    if (i < between4Array.length) {
      if (between3Array[i].x < between4Array[i].x) between3Array[i].x++;
      if (between3Array[i].x > between4Array[i].x) between3Array[i].x--;
      if (between3Array[i].y < between4Array[i].y) between3Array[i].y++;
      if (between3Array[i].y > between4Array[i].y) between3Array[i].y--;
    }
  }
  //endShape();
  pop();

  // TOP TWO ANIMATION
  for (let i = 0; i < twoArray.length; i++) {
    push();
    ellipse(twoArray[i].x + sin(angle + i * 5), twoArray[i].y, 3);
  
    pop();
  }
 angle += 10;
  
    // MIDDLE TWO ANIMATION
  for (let i = 0; i < two2Array.length; i++) {
    push();
    translate(two2Array[i].x + tan(angle + i * 8), two2Array[i].y);
     rect(-2, -2,7, 5);
    pop();
  }
  
  //BOTTOM TWO ANIMATION
   for (let i = 0; i < two3Array.length; i++) {
    push();
    let lineLength = 10; // Adjust this value to make lines shorter
    line(two3Array[i].x, two3Array[i].y, 
         two3Array[i].x + cos(angle + i * 5) * lineLength, 
         two3Array[i].y + sin(angle + i * 5) * lineLength);
    pop();
  
   }
  
  
  //TOP WORLD
   for (let i = 0; i < world3Array.length; i++) {
    push();
    let lineLength = 10; // Adjust this value to make lines shorter
    line(world3Array[i].x, world3Array[i].y, 
         world3Array[i].x + cos(angle + i * 7) * lineLength, 
        world3Array[i].y + sin(angle + i * 70) * lineLength);
    pop();
  
   }
  
  
  // MIDDLE WORLD
  push();
  beginShape();
  for (let i = 0; i < worlds2Array.length; i++) {
    vertex(worlds2Array[i].x*2, worlds2Array[i].y);
  }
  endShape();
  pop();
  
  //BOTTOM WORLD
   for (let i = 0; i < worldsArray.length; i++) {
    push();
    let lineLength = 10; // Adjust this value to make lines shorter
    line(worldsArray[i].x, worldsArray[i].y, 
         worldsArray[i].x + cos(angle + i * 7) * lineLength, 
        worldsArray[i].y + sin(angle + i * 70) * lineLength);
    pop();
  
   }
  
}