var box;
let tiffany = [];
var screenName;
var myFont;
screenshot = 'press enter to save your Tiffany enviroment'

function preload() {
  box = loadImage('assets/box.png');
  charm = loadImage('assets/ciondolo.png');
  diamond = loadImage('assets/ring.png');
  tiffanyb = loadImage('assets/tiffany.png');
  myFont = loadFont('assets/Roboto-Bold.ttf');
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 90; i++) { //number of image
    tiffany[i] = new Tiffany(random(width), random(height), random(50, 80), i, tiffany); // parameters
  }

  sel = createSelect();
  sel.option('Box');
  sel.option('Charm');
  sel.option('Diamond');
  sel.position(windowWidth / 2 - 80, 200);
  sel.style('width', '200px')
}

function draw() {
  background(10, 186, 181);

  image(tiffanyb, windowWidth / 2 - 380, windowHeight / 10 - 60, 400 * 2, 68 * 2)

  push()
    fill('white');
    textSize(18);
    textFont(myFont);
    textAlign(CENTER)
    fill('white');
    text(screenshot, windowWidth/2 + 20, 700);
  pop()

  tiffany.forEach(tiffanyobg => { // generate all the objects and call the functions
    push()
    translate(-30,-30) // adjust the collide with the borders of the canvas
    tiffanyobg.collide();
    tiffanyobg.move();
    tiffanyobg.display();
    tiffanyobg.changeImg();
    pop()
  });
}

class Tiffany {
  constructor(x1, y1, dim, id1, obj1) {
    this.x = x1;
    this.y = y1;
    this.velX = 0;
    this.velY = 0;
    this.dimension = dim;
    this.id = id1;
    this.objs = obj1;
  }

  collide() { // give to evrey object a solid mass
    for (let i = this.id; i < 90; i++) { // set 90 as the maximum objects to create;
      let dx = this.objs[i].x - this.x;
      let dy = this.objs[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.objs[i].dimension / 2 + this.dimension / 2;

      if (distance < minDist) { // check the distance between more objects
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let accX = (targetX - this.objs[i].x) / 10;
        let accY = (targetY - this.objs[i].y) / 10;
        this.velX = this.velX - accX; // set the bump (x)
        this.velY = this.velY - accY; // set the bump (y)
        this.objs[i].velX = this.objs[i].velX + accX;
        this.objs[i].velY = this.objs[i].velY + accY;
      }
    }
  }

  move() { // makes the tiffany move
    this.x = this.x + this.velX; //update x and y coordinates to make the objects move
    this.y = this.y + this.velY;
    // bump on the when touch the border (x)
    if (this.x + this.dimension / 2 > windowWidth) {
      this.x = windowWidth - this.dimension / 2;
      this.velX *= 0.01;
    } else if (this.x - this.dimension / 2 < 0) {
      this.x = this.dimension / 2;
      this.velX *= 0.01;
    }
    // bump on the when touch the border (y)
    if (this.y + this.dimension / 2 > windowHeight) {
      this.y = windowHeight - this.dimension / 2;
      this.velY *= 0.01;
    } else if (this.y - this.dimension / 2 < 0) {
      this.y = this.dimension / 2;
      this.velY *= 0.01;
    }
  }

  display() { // show the objects
    image(box, this.x, this.y, this.dimension, this.dimension);
  }

  changeImg() { // set the possibilities to change the content image
    let val = sel.value();
    if (val == 'Box') {
      box = box;
      screenName = 'TiffanyBox';
    } else if (val == 'Charm') {
      box = charm;
      screenName = 'TiffanyCharm';
    } else if (val == 'Diamond') {
      box = diamond;
      screenName = 'TiffanyDiamond';
    } else if (val == 'Box') {
      box = box;
    }
  }

}

function keyPressed() { // take a screenshot and save in local memory
  if (keyCode === ENTER) {
    screenshot = ''
    saveCanvas(myCanvas, screenName, "png");
  }
}
