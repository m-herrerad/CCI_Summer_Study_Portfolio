// Coding demo: How to use arithmetic equations

let circleX1 = 200;
let circleX2 = 700;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 0, 220);


    circle(circleX1, 300, 50);

    circleX1 = circleX1 + 100;

    circle(circleX1, 300, 50);

    
    circleX1 = circleX1 + 200;

    circle(circleX1, 300, 50);


    circleX1 = circleX1 + 300;

    circle(circleX1, 300, 50);



    circle(circleX2, 300, 50);


    circleX2 = circleX2 - 100;

    circle(circleX2, 300, 50);


    circleX2 = circleX2 - 200;

    circle(circleX2, 300, 50);


    circleX2 = circleX2 - 300;

    circle(circleX2, 300, 50);
    noLoop(); //Prevents animation

}
