var canvas,ctx;


var mouseX,mouseY,mouseDown=0;


var touchX,touchY;

let colorStroke = "black";

function drawDot(ctx,x,y,size) {
    // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)


    // Select a fill style
    ctx.fillStyle = colorStroke;

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
    drawDot(ctx,mouseX-50,mouseY,55);
}


function sketchpad_mouseUp() {
    mouseDown=0;
}


function sketchpad_mouseMove(e) {

    getMousePos(e);


    if (mouseDown==1) {
        drawDot(ctx,mouseX-50,mouseY,55);
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

    drawDot(ctx,touchX-50,touchY,55);


    event.preventDefault();
}


function sketchpad_touchMove(e) {

    getTouchPos(e);


    drawDot(ctx,touchX-50,touchY,55);


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

let addColors =  function () {
let li = document.getElementsByTagName("li");
li[0].style.backgroundColor = "black";
li[1].style.backgroundColor = "green";
li[2].style.backgroundColor = "red";
li[3].style.backgroundColor = "blue";
li[4].style.backgroundColor = "yellow";
li[4].style.color = "black";

//checkScreenWidth();
}

function init() {

    canvas = document.getElementById('sketchpad');
    //addColors();
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

let changeColorStroke = function (num) {
  console.log("colorChange");
  switch (num) {
    case 1:
        colorStroke = "black";
      break;
    case 2:
        colorStroke = "green";
      break;
    case 3:
        colorStroke = "red";
      break;
    case 4:
        colorStroke = "blue";
      break;
    case 5:
        colorStroke = "yellow";
      break;

    default:

        colorStroke = "black";
  }

}
