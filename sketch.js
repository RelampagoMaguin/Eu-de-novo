function setup() {
    createCanvas(600, 500);
    background(220);
  }
  
  function draw() {
    stroke("green");
    fill("yellow");
    
    if(mouseIsPressed)
      rect(mouseX, mouseY, 20, 35);
  }