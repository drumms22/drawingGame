var canvas,ctx;
let imgArray = [];
let arr = [];
let count = 0;
let drawingCorrect = false;
let colorStroke = "black";


var mouseX,mouseY,mouseDown=0;


var touchX,touchY;


function drawDot(ctx,x,y,size) {

  console.log("{ x: " + x + ", y: " + y + ", bool: false },");

    if(window.innerHeight < window.innerWidth){
      x-=50;
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


function clearCanvas(canvas,ctx) {

    drawingCorrect = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

        getLetter();
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}

let changeColorStroke = function (num) {
  console.log("colorChange");
  let colors = ["black","green","red","blue","purple","#ff3399","yellow","orange","#66ff33","#ff1a1a","#00ffff","#ff99ff","#ff33cc","brown","white"]

  colorStroke = colors[num];
}

let showColorPallet = function () {

  if(!document.getElementById("colorList").style.display || document.getElementById("colorList").style.display === "none"){

    document.getElementById("colorList").style.display = "flex";

  }else{

    document.getElementById("colorList").style.display = "none";

  }
  document.getElementById("hiddenPanel").classList.toggle("slideIn");


}

let checkCoordinates = function (posx, posy) {
  imgArray.push({x:posx,y:posy});
  for (var i = 0; i < arr.length; i++) {
    if(posx >= (arr[i].x - 20) && posx <= (arr[i].x + 20) && arr[i].bool === false){

      if(posy >= (arr[i].y - 20) && posy <= (arr[i].y + 20)){

          arr[i].bool = true;
          checkCanvas();

      }
    }
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
    drawingCorrect = true;
    displayImg();
  }

}

let displayImg = function () {

  document.getElementById("popUp").style.display = "block";
  document.getElementById("popUp").classList.add("spinner");

  setTimeout(function(){
    hideImg();
  },1000);

}

let hideImg = function () {

  document.getElementById("popUp").classList.remove("spinner");

  setTimeout(function () { document.getElementById("popUp").style.display = "none";},2000);

}

let getLetter = function () {
hideImg();
clearCanvas(canvas, ctx);
imgArray = [];
arr = [];
let num = 0;
let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


let letterA = [
{ x: 353, y: 438, bool: false },
{ x: 398, y: 339, bool: false },
{ x: 439, y: 242, bool: false },
{ x: 496, y: 168, bool: false },
{ x: 550, y: 240, bool: false },
{ x: 588, y: 342, bool: false },
{ x: 632, y: 432, bool: false },
{ x: 522, y: 378, bool: false },
{ x: 456, y: 376, bool: false },
];

let letterB = [
{ x: 390, y: 191, bool: false },
{ x: 397, y: 434, bool: false },
{ x: 396, y: 315, bool: false },
{ x: 534, y: 170, bool: false },
{ x: 626, y: 226, bool: false },
{ x: 551, y: 310, bool: false },
{ x: 638, y: 389, bool: false },
{ x: 518, y: 456, bool: false }];

let letterC = [
{ x: 612, y: 414, bool: false },
{ x: 499, y: 430, bool: false },
{ x: 396, y: 360, bool: false },
{ x: 390, y: 242, bool: false },
{ x: 486, y: 168, bool: false },
{ x: 601, y: 186, bool: false }];

let letterD = [
{ x: 374, y: 433, bool: false },
{ x: 533, y: 426, bool: false },
{ x: 632, y: 346, bool: false },
{ x: 626, y: 228, bool: false },
{ x: 513, y: 169, bool: false },
{ x: 381, y: 169, bool: false },
{ x: 372, y: 294, bool: false }];

let letterE = [
{ x: 612, y: 439, bool: false },
{ x: 510, y: 438, bool: false },
{ x: 398, y: 439, bool: false },
{ x: 403, y: 326, bool: false },
{ x: 403, y: 154, bool: false },
{ x: 403, y: 235, bool: false },
{ x: 503, y: 159, bool: false },
{ x: 604, y: 166, bool: false },
{ x: 501, y: 304, bool: false },
{ x: 596, y: 303, bool: false }];

let letterF = [
{ x: 617, y: 164, bool: false },
{ x: 507, y: 158, bool: false },
{ x: 404, y: 154, bool: false },
{ x: 412, y: 257, bool: false },
{ x: 416, y: 357, bool: false },
{ x: 423, y: 438, bool: false },
{ x: 507, y: 330, bool: false },
{ x: 599, y: 321, bool: false }];

let letterG = [
{ x: 623, y: 335, bool: false },
{ x: 584, y: 438, bool: false },
{ x: 455, y: 427, bool: false },
{ x: 371, y: 323, bool: false },
{ x: 412, y: 201, bool: false },
{ x: 540, y: 171, bool: false },
{ x: 621, y: 198, bool: false }];

let letterH = [
{ x: 383, y: 442, bool: false },
{ x: 384, y: 317, bool: false },
{ x: 377, y: 179, bool: false },
{ x: 500, y: 299, bool: false },
{ x: 614, y: 291, bool: false },
{ x: 616, y: 171, bool: false },
{ x: 615, y: 434, bool: false }];

let letterI = [
{ x: 494, y: 166, bool: false },
{ x: 494, y: 258, bool: false },
{ x: 499, y: 353, bool: false },
{ x: 495, y: 446, bool: false },
{ x: 496, y: 446, bool: false }];

let letterJ = [
{ x: 426, y: 169, bool: false },
{ x: 562, y: 169, bool: false },
{ x: 523, y: 431, bool: false },
{ x: 554, y: 300, bool: false },
{ x: 396, y: 429, bool: false }];

let letterK = [];
let letterL = [];
let letterM = [];
let letterN = [];
let letterO = [];
let letterP = [];
let letterQ = [];
let letterR = [];
let letterS = [];
let letterT = [];
let letterU = [];
let letterV = [];
let letterW = [];
let letterX = [];
let letterY = [];
let letterZ = [];


let letterCoordsArr = [letterA,letterB,letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ];

for (var i = 0; i < 1; i++) {

  let rand = randomNumbers(letterCoordsArr.length);

  for (var j = 0; j < letterCoordsArr[rand].length; j++) {

    arr.push(letterCoordsArr[rand][j]);

}
  document.getElementById("letterLayer").innerHTML =letters[rand];
}
  console.log(arr);
}



let randomNumbers = function(max){

  let rand = Math.floor(Math.random() * max);

  return rand;

}

let btnClear = function () {
  hideImg();
  clearCanvas(canvas, ctx);
}
