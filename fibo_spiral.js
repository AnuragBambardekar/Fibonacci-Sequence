const CANVAS_WIDTH = 1000
const CANVAS_HEIGHT = 500
let fibs = [1,1]
let scale = 1
let minScale

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    angleMode(DEGREES)
    initFibs()
    setMinScale()
}

function draw(){
    background(0)
    translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2)

    for (let i = 0; i<fibs.length; i++)
    {
        const fib = fibs[i] * scale
        rect(0,0,fib,fib)
        noFill();
        arc(fib,0,2*fib,2*fib,90,180)
        stroke(233, 190, 4);
        translate(fib,fib)
        rotate(-90)
    }

    if(scale <= minScale){
        fibs = [1,1]
        initFibs()
        scale=1
        } 
        else {
        scale *= 0.994
        }

    
    //Zoom effect, make boxes smaller on each iteration
    //scale *= 0.99
}

//calculate Fibonacci sequence
function addFib() {
    const fibLen = fibs.length

    fibs.push(fibs[fibLen-1] + fibs[fibLen-2])
}

//Initialize Fibonacci by calling addFib()
function initFibs() {
    for(let i =0; i<100; i++){
        addFib()
    }
}

//Fibonacci spirals are self-similar
function setMinScale() {
    const fibLen = fibs.length
    minScale = fibs[fibLen-5]/fibs[fibLen-1]
}

/**
 * In the setup function, a canvas is created with a width and height specified by the CANVAS_WIDTH and CANVAS_HEIGHT constants. 
 * The angle mode is set to degrees, and the initFibs function is called to initialize the Fibonacci sequence. The setMinScale function is also called, 
 * which will be used later to determine the minimum scale factor for the boxes in the spiral.

 * The draw function is called repeatedly by p5.js, causing the canvas to be redrawn on each iteration. The canvas is first filled with a black background color, 
 * and then translated to the center of the canvas.

 * A loop is then used to iterate over the Fibonacci sequence and draw a box for each number in the sequence. The size of the box is determined by the current number in 
 * the sequence and the current scale factor. An arc is drawn on top of the box, and the canvas is translated and rotated to prepare for the next iteration.

 * The scale factor is reduced on each iteration of the draw function to create a zoom effect, causing the boxes to appear to get smaller as the spiral expands. 
 * When the scale factor reaches the minimum scale determined by the setMinScale function, the Fibonacci sequence is reinitialized and the scale factor is reset to 1. 
 * This causes the spiral to reset and start drawing again from the center of the canvas.
 * 
 */