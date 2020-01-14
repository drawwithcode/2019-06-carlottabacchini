// Create a variable for  Slider
let slider1;
let slider2;
let slider3;
let answer;
let tips;
let attempts = 8;
let contenuto, colore;
let r,g,b;
var myFont;

function preload() {
  myFont = loadFont('assets/Roboto-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

// create Sliders for changing the background color
  slider1 = createSlider(0, 255, 128);
  slider1.position(windowWidth / 2 - 200, windowHeight / 2 - 132);
  slider1.style('width', '300px');
  slider1.style('background', 'transparent')
  slider1.style('z-index', '0')

  slider2 = createSlider(0, 255, 128);
  slider2.position(windowWidth / 2 - 200, windowHeight / 2 - 92);
  slider2.style('width', '300px');
  slider2.style('background', 'transparent')
  slider2.style('z-index', '0')

  slider3 = createSlider(0, 255, 128);
  slider3.position(windowWidth / 2 - 200, windowHeight / 2 - 52);
  slider3.style('width', '300px');
  slider3.style('background', 'transparent')
  slider3.style('z-index', '0')
}

function draw() {

  // creating the variables of colors
  r = slider1.value();
  g = slider2.value();
  b = slider3.value();

  background(r, g, b);

  slider1.style('opacity', '1')
  slider2.style('opacity', '1')
  slider3.style('opacity', '1')


  // print the value of the slider
  push()
  fill(33, 33, 33, )
  rectMode(CENTER)
  rect(windowWidth / 2 + 160, windowHeight / 2 - 116, 70, 25, 40)
  rect(windowWidth / 2 + 160, windowHeight / 2 - 75, 70, 25, 40)
  rect(windowWidth / 2 + 160, windowHeight / 2 - 35, 70, 25, 40)

  fill('white')
  textSize(16)
  textAlign(CENTER)
  text('R: ' + r, windowWidth / 2 + 160, windowHeight / 2 - 111);
  text('G: ' + g, windowWidth / 2 + 160, windowHeight / 2 - 70);
  text('B: ' + b, windowWidth / 2 + 160, windowHeight / 2 - 30);
  pop()


// explanation
  push()
  textFont(myFont);
  fill('white');
  textSize(windowWidth / 50 + 10);
  textAlign(CENTER);
  text('TRY TO GUESS MY FAVOURITE COLOR', windowWidth / 2, 100);

  fill('white');
  textFont(myFont);
  textSize(windowWidth / 90 + 8);
  textAlign(CENTER);
  text("I'll give you some suggestions", windowWidth / 2, 150);

  fill('white');
  textFont(myFont);
  textSize(windowWidth / 90 + 8);
  textAlign(CENTER);
  text("But remember, you have only maximum 8 attempts", windowWidth / 2, 180);

  fill('white');
  textFont(myFont);
  textSize(15);
  textAlign(CENTER);
  text("Press enter to submit", windowWidth / 2, 455);

  pop()


// determine what it happens if the answer is wrong
  if (answer == 'wrong') {
    push()
    fill('white');
    textFont(myFont);
    textSize(18);
    textAlign(CENTER);
    text("Only " + attempts + " attempts left", windowWidth / 2, 625);
    pop()
    push()
    fill(117, 4, 12);
    textSize(windowWidth / 75 + 8);
    textAlign(CENTER);
    text(tips, windowWidth / 2, 660);
    pop()
  }

  if (answer == 'right') {
    push()
      button = createButton('GO ON');
      button.style('background-color', 'rgb(33,33,33)');
      button.style("color", "rgb(255,255,255)");
      button.style("padding", "8px 20px 8px 20px");
      button.style("border-radius", "15px");
      button.style('cursor', 'pointer')
      button.style("font-size", "20px");
      button.style("border-style", "solid");
      button.style("border-color", "rgb(0,0,0)");
      button.position(windowWidth/2 - 60, 720);
      button.mousePressed(cambiaPagina);
    pop()
    noLoop()
  }

// determine what it happens if the answer is wrong
  if (keyIsDown(ENTER)) {
      if (r >= 0 && r <= 100 && g >= 180 && g <= 220 && b >= 160 && b <= 190) {
        answer = 'right';
        background(r, g, b);
        textFont(myFont);
        testo("Congrats! My favourite color is Tiffany Blue", 'black')
      } else if (r >= 100) {
        answer = 'wrong';
        textFont(myFont);
        tips = "The value of the red is too high, turn it down!"
        background(117, 4, 12)
        contenuto = 'Wrong answer, try again!"'
        colore = 'white'
        testo("Wrong answer, try again!", 'white')
      } else if (g <= 180) {
        answer = 'wrong';
        textFont(myFont);
        tips = "You need more green!"
        background(117, 4, 12)
        contenuto = 'Wrong answer, try again!"'
        colore = 'white'
        testo("Wrong answer, try again!", 'white')
      } else if (g >= 220) {
        answer = 'wrong';
        textFont(myFont);
        tips = "Too much green now, take it down..."
        background(117, 4, 12)
        contenuto = 'Wrong answer, try again!"'
        colore = 'white'
        testo("Wrong answer, try again!", 'white')
      } else if (b >= 190) {
        answer = 'wrong';
        textFont(myFont);
        tips = "I love the blue, but now is too much"
        background(117, 4, 12)
        contenuto = 'Wrong answer, try again!"'
        colore = 'white'
        testo("Wrong answer, try again!", 'white')
      } else if (b <= 160) {
        textFont(myFont);
        answer = 'wrong';
        tips = "I love the blue... keep it up"
        background(117, 4, 12)
        contenuto = 'Wrong answer, try again!"'
        colore = 'white'
        testo("Wrong answer, try again!", 'white')
      }
    }


// determine what it happens if you loose the game
  if (attempts <= 0) {
    background('black')
    textFont(myFont);
    testo('Game Over!\nYou have finished the attempts', 'white')
  }


}

//setting the keyboard input and the range of colors
// function keyPressed() {
//   if (keyCode === ENTER) {
//     if (r >= 0 && r <= 100 && g >= 180 && g <= 220 && b >= 160 && b <= 190) {
//       answer = 'right';
//       background(r, g, b);
//       testo("Congrats! You almost guessed my favorite color.", 'black')
//     }
//   }
// }

// define the function that allows to change page when click on the button
function cambiaPagina() {
  window.open("index2.html", "_self")
}

// set the function that allows the game over text to appear
function testo(str, col) {
  this.contenuto = str;
  this.color = col;

  slider1.style('opacity', '0')
  slider2.style('opacity', '0')
  slider3.style('opacity', '0')

  fill(this.color);
  textSize(windowWidth / 30 + 8);
  textAlign(CENTER);
  text(this.contenuto, windowWidth / 2, windowHeight / 2);
}

// determine that everytime you press enter, the number of attempts decrease
function keyReleased() {
  if (keyCode == ENTER){
    attempts = attempts - 1;
    console.log(attempts)
  }
}
