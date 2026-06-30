function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    dino(0, 0, 0.5, 189);
}

//Legs 
function legs() {

begingShape();
vertex(336, 474);
vertex(360, 484);
vertex(362, 532);
vertex(515, 532);
endShape(CLOSE);

}


function dino (x, y, s, g) {

    push ();  
    translate (x,y);
    scale (s);

    //Behind
    fill(g-20, 180, 150);
    noStroke();
    quad(336, 474, 360, 484, 362, 532, 315, 532);
    quad(521, 500, 545, 489, 565, 548, 518, 548);


    fill(g, 186, 130);
    noStroke();

    //neck
    quad(226, 215, 268, 157, 328, 350, 285, 423);

    //head
    ellipse (200, 170, 140, 100);

    //body
    ellipse (470, 410, 376, 186);

    //Front
    quad(386, 476, 420, 490, 421, 561, 356, 561);
    quad(562, 490, 596, 476, 626, 561, 558, 561);

    //Tail
    beginShape();
    bezierVertex(626, 379);

    bezierVertex(626, 379);
    bezierVertex(754, 355);
    bezierVertex(754, 258);

    bezierVertex(771, 392);
    bezierVertex(629, 437);
    bezierVertex(629, 437);

    endShape(CLOSE);

    //eyes
    fill(0);
    noStroke();
    circle(217, 160, 22)

}
