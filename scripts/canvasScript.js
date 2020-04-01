var canvas,ctx;


var mouseX,mouseY,mouseDown=0;


var touchX,touchY;


function drawDot(ctx,x,y,size) {
    // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
    r=0; g=0; b=0; a=255;

    // Select a fill style
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    // Draw a filled circle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}


function clearCanvas(canvas,ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function sketchpad_mouseDown() {
    mouseDown=1;
    drawDot(ctx,mouseX,mouseY,70);
}


function sketchpad_mouseUp() {
    mouseDown=0;
}


function sketchpad_mouseMove(e) {

    getMousePos(e);


    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,70);
    }
}


function getMousePos(e) {
    if (!e)
        var e = event;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
 }


function sketchpad_touchStart() {

    getTouchPos();

    drawDot(ctx,touchX,touchY,70);


    event.preventDefault();
}


function sketchpad_touchMove(e) {

    getTouchPos(e);


    drawDot(ctx,touchX,touchY,70);


    event.preventDefault();
}


function getTouchPos(e) {
    if (!e)
        var e = event;

    if(e.touches) {
        if (e.touches.length == 1) { // Only deal with one finger
            var touch = e.touches[0]; // Get the information for finger #1
            touchX=touch.pageX-touch.target.offsetLeft;
            touchY=touch.pageY-touch.target.offsetTop;
        }
    }
}



function init() {

    canvas = document.getElementById('sketchpad');

    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
        ctx = canvas.getContext('2d');


    if (ctx) {

        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}
