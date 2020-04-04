var canvas,ctx;
let drawingCorrect = false;
let colorStroke = "black";
var mouseX,mouseY,mouseDown=0;
var touchX,touchY;
let canvasChangebool = false;


function drawDot(ctx,x,y,size) {

  console.log("{ x: " + x + ", y: " + y + ", bool: false },");

    if(window.innerHeight < window.innerWidth){
    //  x-=65;
    }
    ctx.fillStyle = colorStroke;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    if(drawingCorrect === false){
    //checkCoordinates(x,y);
    }

}



function sketchpad_mouseDown() {

    mouseDown=1;
    drawDot(ctx,mouseX,mouseY,55);
}


function sketchpad_mouseUp() {

    mouseDown=0;
}


function sketchpad_mouseMove(e) {

    getMousePos(e);

    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,55);
    }
}


function getMousePos(e) {

    if (!e)
        var e = event;

        mouseX = e.offsetX;
        mouseY = e.offsetY;

 }


function sketchpad_touchStart() {

    getTouchPos();

    drawDot(ctx,touchX,touchY,55);


    event.preventDefault();
}


function sketchpad_touchMove(e) {

    getTouchPos(e);

    drawDot(ctx,touchX,touchY,55);


    event.preventDefault();
}


function getTouchPos(e) {
    var br = canvas.getBoundingClientRect();
    if (!e)
        var e = event;

    if(e.touches) {
        if (e.touches.length == 1) { // Only deal with one finger
            var touch = e.touches[0]; // Get the information for finger #1
            touchX=touch.clientX-br.left;
            touchY=touch.clientY-br.top;
        }
    }
}



function init() {

    canvas = document.getElementById('sketchpad');

    if (canvas.getContext)
        ctx = canvas.getContext('2d');

         //x: 389, y: 168,
    if (ctx) {
        drawDot(ctx, 389, 168, 55);
        if(canvasChangebool === false){
        //  getLetter(-1);
        }
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}
