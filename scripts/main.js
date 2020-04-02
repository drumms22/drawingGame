let imgArray = [];
let arr = [];
let count = 0;
let canvasStrokeBool = true;
let colorStroke = "black";


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

/*
let checkScreenWidth = function () {

  if(window.screenWidth > 1000){
    document.getElementById("canvas").style.marginLeft = "5%";
  }

}

let touchDownType = function (event) {
  document.getElementById("body").style.overscrollBehavior = "none";
    canvasStrokeBool = true;
    switch(event.pointerType) {
        case "mouse":
            window.addEventListener('mousemove', getCoordinates, false);
            break;
        case "pen":
            window.addEventListener('pointermove', getCoordinates, false);
            break;
        case "touch":
            window.addEventListener('touchmove', getTouchCoords, false);
            break;
        default:
            /* pointerType is empty (could not be detected)
            or UA-specific custom type
    }
        event.preventDefault();
}

let touchUpType = function (event) {
  document.getElementById("body").style.overscrollBehavior = "auto";
    canvasStrokeBool = false;
    switch(event.pointerType) {
        case "mouse":
            window.removeEventListener('mousemove', getCoordinates, false);

            break;
        case "pen":
            window.removeEventListener('pointermove', getCoordinates, false);
            console.log("pointer");
            break;
        case "touch":
            window.removeEventListener('touchmove', getCoordinates, false);
            break;
        default:
            /* pointerType is empty (could not be detected)
            or UA-specific custom type
    }
}
let getCoordinates = function (e) {
  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  let posx;
  let posy;

  //var pos = getMousePos(canvas, e);
  if(e.type === "mousemove" || e.pointerType === "pointermove"){

    let pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;


  }else{

    posx = e.changedTouches[0].pageX;
    posy = e.changedTouches[0].pageY;

  }

  if(canvasStrokeBool === true){
  checkCoordinates(posx, posy);

  createStroke(posx,posy);

  imgArray.push({x:posx,y:posy});
  console.log(imgArray);
  console.log("x = " + posx);
  console.log("y = " + posy);
}
}
function getMousePos(canvas, evt) {
  console.log("event = " + evt);
  console.log("canvas = " + canvas);
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.offsetX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.offsetY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
let canvas = document.getElementById("imgCanvas");
window.addEventListener('pointerdown',touchDownType, false);
window.addEventListener('touchstart',touchDownType, false);

window.addEventListener('pointerup',touchUpType,false);
window.addEventListener('touchend',touchUpType,false);*/



let checkCoordinates = function (posx, posy) {
  imgArray.push({x:posx,y:posy});
  for (var i = 0; i < arr.length; i++) {
    if(posx >= (arr[i].x - 30) && posx <= (arr[i].x + 30) && arr[i].bool === false){

      if(posy >= (arr[i].y - 30) && posy <= (arr[i].y + 30)){

          arr[i].bool = true;
          checkCanvas();

      }
    }
  }

}

/*let clearCanvas = function () {
  console.log("clearrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}*/
let getLetter = function () {

let letterA = [
{ x: 337, y: 615, bool: false },
{ x: 387, y: 484, bool: false },
{ x: 434, y: 348, bool: false },
{ x: 438, y: 529, bool: false },
{ x: 497, y: 221, bool: false },
{ x: 561, y: 341, bool: false },
{ x: 609, y: 487, bool: false },
{ x: 663, y: 615, bool: false },
{ x: 509, y: 522, bool: false },
];
let letterB = [
{ x: 337, y: 615, bool: false },
{ x: 387, y: 484, bool: false },
{ x: 434, y: 348, bool: false },
{ x: 438, y: 529, bool: false },
{ x: 497, y: 221, bool: false },
{ x: 561, y: 341, bool: false },
{ x: 609, y: 487, bool: false },
{ x: 663, y: 615, bool: false },
{ x: 509, y: 522, bool: false },
];

for (var i = 0; i < letterA.length; i++) {
  arr.push(letterA[i]);
}
/*for (var i = 0; i < arr.length; i++) {
  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(arr[i].x, arr[i].y, 15, 0, 2 * Math.PI);
  ctx.fill();
}*/
}

/*let createStroke = function (x,y) {

  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(x, y, 70, 0, 2 * Math.PI);
  //ctx.rect(x-10, y-10, 25, 25);
  ctx.fillStyle = colorStroke;
  ctx.fill();

}*/
var canvas,ctx;

// Variables to keep track of the mouse position and left-button status
var mouseX,mouseY,mouseDown=0;

// Variables to keep track of the touch position
var touchX,touchY;

// Draws a dot at a specific position on the supplied canvas name
// Parameters are: A canvas context, the x position, the y position, the size of the dot
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

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas,ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Keep track of the mouse button being pressed and draw a dot at current location
function sketchpad_mouseDown() {
    mouseDown=1;
  //  checkCoordinates(mouseX,mouseY);
    drawDot(ctx,mouseX,mouseY,12);
}

// Keep track of the mouse button being released
function sketchpad_mouseUp() {
    mouseDown=0;
}

// Keep track of the mouse position and draw a dot if mouse button is currently pressed
function sketchpad_mouseMove(e) {
    // Update the mouse co-ordinates when moved
    getMousePos(e);
  //  checkCoordinates(mouseX,mouseY);
    // Draw a dot if the mouse button is currently being pressed
    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,12);
    }
}

// Get the current mouse position relative to the top-left of the canvas
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

// Draw something when a touch start is detected
function sketchpad_touchStart() {
    // Update the touch co-ordinates
    getTouchPos();

    //checkCoordinates(touchX,touchY);

    drawDot(ctx,touchX,touchY,12);

    // Prevents an additional mousedown event being triggered
    event.preventDefault();
}

// Draw something and prevent the default scrolling when touch movement is detected
function sketchpad_touchMove(e) {
    // Update the touch co-ordinates
    getTouchPos(e);

    //checkCoordinates(touchX,touchY);
    // During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
    drawDot(ctx,touchX,touchY,12);

    // Prevent a scrolling action as a result of this touchmove triggering.
    event.preventDefault();
}

// Get the touch position relative to the top-left of the canvas
// When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
// but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
// "target.offsetTop" to get the correct values in relation to the top left of the canvas.
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


// Set-up the canvas and add our event handlers after the page has loaded
function init() {
    // Get the specific canvas element from the HTML document
    canvas = document.getElementById('sketchpad');
    //getLetter();
    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
        ctx = canvas.getContext('2d');

    // Check that we have a valid context to draw on/with before adding event handlers
    if (ctx) {
        // React to mouse events on the canvas, and mouseup on the entire document
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        // React to touch events on the canvas
        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}


let checkCanvas = function () {
  let count = 0;
  console.log("canvas check....");
  for (var i = 0; i < arr.length; i++) {

      if (arr[i].bool === false) {
        count++;
      }
  }

  if (count === 0) {
    canvasStrokeBool = false;
    alert("You are done! good jobbbbbbbbbbbbbbb!");
  }

}
