let persons = [];
let personFiles = ["Person_1", "Person_2", "Person_3", "Person_4", "Person_5", "Person_6", "Person_7"];
let currentPersonIndex = 0; // which person is currently shown — changed by pressing 'p'

let texts = [];
let textFiles = ["Text_1", "Text_2", "Text_3"];
let textSwitchInterval = 10; // frames between automatic font swaps

let features = [];
let featureNames = [
  "Nose_1", "Nose_2", "Nose_3", "Nose_4", "Nose_5", "Nose_6", "Nose_7",
  "Eye_1", "Eye_2", "Eye_3", "Eye_4", "Eye_5", "Eye_6",
  "Mouth_1", "Mouth_2", "Mouth_3", "Mouth_4", "Mouth_5", "Mouth_6", "Mouth_7"
];

let draggedFeature = null; // whichever feature is currently being dragged, or null
let bgColor;

async function setup() {
  createCanvas(1500, 920);
  imageMode(CENTER); // every image() call below treats x,y as the image's center

  bgColor = color(48, 70, 94); 

  // PERSONS
  for (let file of personFiles) {
    let per = await loadImage('/Session_04/Task_04/assets/Imagenes/' + file + ".png");
    persons.push(per);
  }

  // TEXTS — renamed the loop variable to avoid shadowing p5's built-in text() function
  for (let file of textFiles) {
    let img = await loadImage('/Session_04/Task_04/assets/Imagenes/' + file + ".png");
    texts.push(img);
  }

  // FACE FEATURES — scattered on the left, like your reference image
  for (let name of featureNames) {
    let img = await loadImage('/Session_04/Task_04/assets/Imagenes/' + name + ".png");
    features.push({
      name: name,
      img: img,
      x: random(60, 700),
      y: random(500, 900),
      w: 200,
      h: 200
    });
  }
}

function draw() {
  background(bgColor); // clears every frame — without this, dragged features leave trails behind

  // current person, large, on the right side
  image(persons[currentPersonIndex], 1050, 550, 800, 800);

  // animated text, top-left, cycling through the 3 font PNGs automatically
  let textIndex = floor(frameCount / textSwitchInterval) % texts.length;
  image(texts[textIndex], 400, 200, 700, 430);

  // the pile of draggable features
  for (let f of features) {
    image(f.img, f.x, f.y, f.w, f.h);
  }
}

function mousePressed() {
  // find the topmost feature under the cursor and start dragging it
  // looping backwards so features drawn last (on top) get picked first
  for (let i = features.length - 1; i >= 0; i--) {
    let f = features[i];
    let halfW = f.w / 2;
    let halfH = f.h / 2;
    if (mouseX > f.x - halfW && mouseX < f.x + halfW &&
        mouseY > f.y - halfH && mouseY < f.y + halfH) {
      draggedFeature = f;
      selectedFeature = f;
    }
  }
}

function mouseDragged() {
  if (draggedFeature) {
    draggedFeature.x = mouseX;
    draggedFeature.y = mouseY;
  }
}

function mouseReleased() {
  draggedFeature = null;
}

function keyPressed() {
  if (key === 'p') {
    currentPersonIndex = floor(random(persons.length));
  } else if (keyCode === 38) {
    selectedFeature.w = constrain(selectedFeature.w + 10, 20, 400);
    selectedFeature.h = constrain(selectedFeature.h + 10, 20, 400);
  } else if (keyCode === 40) {
    selectedFeature.w = constrain(selectedFeature.w - 10, 20, 400);
    selectedFeature.h = constrain(selectedFeature.h - 10, 20, 400);
  }
}
