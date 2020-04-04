var canvas,ctx;
let drawingCorrect = false;
let colorStroke = "black";
var mouseX,mouseY,mouseDown=0;
var touchX,touchY;
let canvasChangebool = false;
let panelOpenBool = false;

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

  //console.log("{ x: " + x + ", y: " + y + ", bool: false },");
  if(panelOpenBool == true){ closePanel();}

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

let addColors =  function () {

  let li = document.getElementsByTagName("li");
  li[0].style.backgroundColor = "black";
  li[1].style.backgroundColor = "green";
  li[2].style.backgroundColor = "red";
  li[3].style.backgroundColor = "blue";
  li[4].style.backgroundColor = "yellow";
  li[4].style.color = "black";

}


function init() {

    canvas = document.getElementById('sketchpad');

    if (canvas.getContext)
        ctx = canvas.getContext('2d');


    if (ctx) {

        if(canvasChangebool === false){
          getLetter(-1);
        }

        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}

window.addEventListener("scroll", function () {

  let elOne = document.getElementById("hiddenPanel1");
  let elTwo = document.getElementById("hiddenPanel2");

  if(window.innerHeight < window.innerWidth){


      elOne.style.position = "absolute";
      elOne.style.bottom = "-200px";
      elOne.style.borderBottom = "3px solid black";

      elTwo.style.position = "absolute";
      elTwo.style.bottom = "-200px";
      elTwo.style.borderBottom = "3px solid black";
    }else if(window.innerHeight > window.innerWidth){

      elOne.style.position = "fixed";
      elOne.style.bottom = "0";
      elOne.style.borderBottom = "none";

      elTwo.style.position = "fixed";
      elTwo.style.bottom = "0";
      elTwo.style.borderBottom = "none";

    }

});

let changeColorStroke = function (num) {

  paintClickSound.play();

  let colors = [
    "#800000",
    "#cc0000",
    "#990033",
    "#e6004c",
    "#ff0000",
    "#ff3333",
    "#cc2900",
    "#ff3300",
    "#ff531a",
    "#ff751a",
    "#ffb380",
    "#ffcc00",
    "#ffdb4d",
    "#ffff00",
    "#ffff4d",
    "#ffff66",
    "#336600",
    "#33cc33",
    "#00ff00",
    "#66ff33",
    "#99ff66",
    "#003366",
    "#0047b3",
    "#0066ff",
    "#0080ff",
    "#99ccff",
    "#33ccff",
    "#6600cc",
    "#ad33ff",
    "#9900ff",
    "#cc00ff",
    "#ff80ff",
    "#cc0099",
    "#cc3399",
    "#ff4dd2",
    "#ff99ff",
    "#663300",
    "#b35900",
    "#ff8c1a",
    "#cc9900",
    "#ffd24d",
    "#000000",
    "#595959",
    "#a6a6a6",
    "#f2f2f2",
    "#ffffff"
  ];
  console.log(colors[num]);
  colorStroke = colors[num];
}

let openPanel = function (num) {

  panelOpenBool = true;

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

let closePanel = function () {

  elementMinSound.play();

  panelOpenBool = false;

  if (document.getElementById("hiddenPanel1").classList.contains("slideIn")) {

    document.getElementById("hiddenPanel1").classList.remove("slideIn");

  }else {

    document.getElementById("hiddenPanel2").classList.remove("slideIn");

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

let changeCanvas = function () {

  btnClickSound.play();

  closePanel();

  arr = [];
  imgArray = [];

  if (canvasChangebool === false) {

    canvasChangebool = true;
    document.getElementById("letterLayer").style.display = "none";

  }else{

    drawingCorrect = false;
    canvasChangebool = false;
    getLetter(-1);
    document.getElementById("letterLayer").style.display = "flex";

  }

  clearCanvas(canvas, ctx);

}
