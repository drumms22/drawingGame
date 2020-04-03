var canvas,ctx;
let drawingCorrect = false;
let colorStroke = "black";
var mouseX,mouseY,mouseDown=0;
var touchX,touchY;

const btnClickSound = new Howl({
  src: ['assets/sounds/click1.mp3']
});

const paintClickSound = new Howl({
  src: ['assets/sounds/rollover3.mp3']
});

const letterClickSound = new Howl({
  src: ['assets/sounds/switch1.mp3']
});

const elementMaxSound = new Howl({
  src: ['assets/sounds/maximize_003.mp3']
});

const elementMinSound = new Howl({
  src: ['assets/sounds/minimize_003.mp3']
});

function drawDot(ctx,x,y,size) {

  console.log("{ x: " + x + ", y: " + y + ", bool: false },");

    if(window.innerHeight < window.innerWidth){
      x-=65;
    }
    ctx.fillStyle = colorStroke;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    if(drawingCorrect === false){
    checkCoordinates(x,y);
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
  soundEffect.play();
    getMousePos(e);


    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,55);
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

    drawDot(ctx,touchX,touchY,55);


    event.preventDefault();
}


function sketchpad_touchMove(e) {

    getTouchPos(e);


    drawDot(ctx,touchX,touchY,55);


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

        getLetter(-1);
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}

let changeColorStroke = function (num) {

  paintClickSound.play();
  console.log("colorChange");
  let colors = ["black","green","red","blue","purple","#ff3399","yellow","orange","#66ff33","#ff1a1a","#00ffff","#ff99ff","#ff33cc","brown","white"]

  colorStroke = colors[num];
}

let openPanel = function (num) {

  let element = document.getElementById("hiddenPanel" + num);

  if (element.classList.contains("slideIn")) {
    elementMinSound.play();
    element.classList.remove("slideIn");
  }else{


  for (var i = 1; i < 3; i++) {
    document.getElementById("hiddenPanel" + i).classList.remove("slideIn");
    }
  elementMaxSound.play();
  element.classList.add("slideIn");

}
}



let btnClear = function () {
  btnClickSound.play();
  imgArray= [];
  drawingCorrect = false;
  hideImg();
  getLetter(letterNum);
  clearCanvas(canvas, ctx);
}

let clearCanvas = function (canvas,ctx) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}
